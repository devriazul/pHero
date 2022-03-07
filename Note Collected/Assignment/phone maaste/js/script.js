// Essential functions
//Function for showing spinner and hiding phones div
const showingSpinner =()=>{
    const getSpinner = document.getElementById('spinner');
    getSpinner.style.display = "block";
    const getPhonesArea = document.getElementById('phones-area');
    getPhonesArea.style.display ="none";
}

//Function for hiding spinner and showing phones div
const hidingSpinner =()=>{
    const getSpinner = document.getElementById('spinner');
    getSpinner.style.display = "none";
    const getPhonesArea = document.getElementById('phones-area');
    getPhonesArea.style.display ="block";
}
//Fuction for reset data
const reset =()=>{
    const getPhonesDiv = document.getElementById('phones');
    getPhonesDiv.textContent = '';
    const getCounterSearch = document.getElementById('counter-search');
    getCounterSearch.innerHTML = `<p>Input brand name and click search to find phones<p>`;
}

//Show single phone details
const showPhoneDetails = phoneSlug =>{
    const phoneURL = `https://openapi.programming-hero.com/api/phone/${phoneSlug}`;
    fetch(phoneURL)
    .then(res => res.json())
    .then(phone => phoneDetails(phone.data));

    const phoneDetails = phone =>{
        //console.log(phone);
        //Adding dynamic data to modal to show single phone data
        const modalHead = document.getElementById('exampleModalLabel');
        modalHead.innerText =`Details of ${phone.name}`;        
        const modalBody = document.getElementById('modal-body');
        if(phone.releaseDate.length <1){
            phone.releaseDate ="No date found";
        } 
        modalBody.innerHTML = `
            <img src="${phone?.image ?? "No Data"}">
            <h5><span>Brand:</span> ${phone?.brand ?? "No Data"}</h5>
            <h5><span>Release Date:</span> ${phone.releaseDate}</h5>
            <h5><span>Main Features:</span></h5>
            <ul>
                <li><span>ChipSet:</span> ${phone.mainFeatures?.chipSet ?? "No Data"}</li>
                <li><span>Display Size:</span> ${phone.mainFeatures?.displaySize ?? "No Data"}</li>
                <li><span>Memory:</span> ${phone.mainFeatures?.memory ?? "No Data"}</li>
                <li><span>Sensors:</li>
                <ul>
                    <li>${phone.mainFeatures?.sensors[0] ?? "None"}</li>
                    <li>${phone.mainFeatures?.sensors[1] ?? "None"}</li>
                    <li>${phone.mainFeatures?.sensors[2] ?? "None"}</li>
                    <li>${phone.mainFeatures?.sensors[3] ?? "None"}</li>
                    <li>${phone.mainFeatures?.sensors[4] ?? "None"}</li>
                </ul>
                <li><span>Storage:</span> ${phone.mainFeatures?.storage ?? "No Data"}</li>
                <li><span>Others:</li>
                <ul>
                    <li><span>Bluetooth: </span>${phone?.Bluetooth ?? "No data"}</li>
                    <li><span>GPS: </span>${phone.others?.GPS ?? "No data"}</li>
                    <li><span>NFC: </span>${phone.others?.NFC ?? "No data"}</li>
                    <li><span>Radio: </span>${phone.others?.Radio ?? "No data"}</li>
                    <li><span>USB: </span>${phone.others?.USB ?? "No data"}</li>
                    <li><span>WLAN: </span>${phone.others?.WLAN ?? "No data"}</li>
                </ul>
            </ul>`;        
    }
}

//Onclick funtion for showing phones result from API
const searchPhones =()=>{
    showingSpinner();
    const getSearchInput = document.getElementById('search-input');
    const getSearchValue = getSearchInput.value;
    const searchText = getSearchValue.toLowerCase();
    getSearchInput.value = '';
    const getCounterSearch = document.getElementById('counter-search');
    //Input data validating
    if(!isNaN(searchText)){
        getCounterSearch.innerHTML = `<p>You didn't search for anything. Please try again.</p>`;
        hidingSpinner();
        const getPhonesDiv = document.getElementById('phones');
        getPhonesDiv.textContent = '';
    }
    else{
       //Fetching data from API
        const url = 'https://openapi.programming-hero.com/api/phones?search='+searchText;   
        fetch(url)
        .then(res => res.json())
        .then(phones => loadPhones(phones.data)); 
    }
    

    const loadPhones = phones =>{
        const getPhonesDiv = document.getElementById('phones');
        getPhonesDiv.textContent = '';
        let counter = 0;
        if(phones.length <1){
            getCounterSearch.innerHTML = `<h5>Not found</h5>`;
        }
        else{
            phones.forEach(phone => {
                counter ++;
                if(counter<=20){
                    const phoneDiv = document.createElement('div');
                    phoneDiv.classList.add('phone');
                    //Adding dynamic text to phone card div
                    phoneDiv.innerHTML = `
                    <p class="phone-counter">${counter}</p>
                    <img src="${phone.image}">
                    <h4 class="my-2">${phone.phone_name}</h4>
                    <!-- Button trigger modal -->
                    <button onclick="showPhoneDetails('${phone.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Show Details
                    </button>`;
                    getPhonesDiv.appendChild(phoneDiv);
                }
            });
        }
        getCounterSearch.innerHTML = `<p>You've searched for: <span>${getSearchValue}</span> <br> Result Found: <span>${counter}</span></p>
        <button id="reset" onclick="reset()">Reset</button>
        `;
        hidingSpinner();
    }
}
// loading spinner animation icon
const loadingSpinner = display => {
    const spinnerContainer = document.getElementById('spinner');
    spinnerContainer.style.display = display;
 }
 
 //clear phones container box
 const clearPhones = phoneContainer => {
     const clearPhones = document.getElementById(phoneContainer);
     clearPhones.textContent = '';
 }
 
 //load all phones
 const loadPhones = () => {
     loadingSpinner('block');
     clearPhones('phone-container');
     clearPhones('phone-info-container');
     const errorMessage = document.getElementById('error-message');
     errorMessage.textContent = '';
     const searchTextInput = document.getElementById('search-field').value;
     document.getElementById('search-field').value = '';
     const searchText = searchTextInput.toLowerCase();
     fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
         .then(res => res.json())
         .then(data => displayPhones(data.data))
 }
 
 //display search phones
 const displayPhones = phones => {
     loadingSpinner('none');
     const phoneContainer = document.getElementById('phone-container');
     const errorMessage = document.getElementById('error-message');
     //show result of number
     const phoneCount = phones.length;
     document.getElementById('phone-count').innerText = `Total result: ${phoneCount}`;

// user input validation
     if(phones.length == 0){
         errorMessage.innerHTML =`
             <h2 class="text-danger">No Record Found!</h2>
         `;
     }else{
         errorMessage.textContent = '';
         phones.forEach(phone => {
             const div = document.createElement('div');
             div.classList.add('col', 'col-md-6', 'col-lg-4');
             div.innerHTML = `
                 <div class="card">
                     <div class="p-5">
                         <img width="100%" src="${phone.image}" class="card-img-top"/>
                     </div>
                     <div class="card-body">
                         <h5 class="card-title">${phone.phone_name}</h5>
                         <p class="card-text">
                           <span class="fw-bold">Brand:</span> ${phone.brand}
                         </p>
                         <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#phone-details-button" onclick="loadSinglePhone('${phone.slug}')">More Details</button>
                     </div>
                 </div>
             `;
             phoneContainer.appendChild(div);
         })
     } 
 }
 
 //load single phone details 
 const loadSinglePhone = phoneId => {
    console.log(phoneId);
     const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
     fetch(url)
         .then(res => res.json())
         .then(data => displayPhoneInfo(data.data))
 }
 
 //display selected phone info on card
 const displayPhoneInfo = phone => {
    const phoneDetailsContainer = document.getElementById("phone-info-container");
    const phoneInfoContainer = document.createElement("div");
    phoneInfoContainer.classList.add("row", "g-0");
     phoneInfoContainer.innerHTML = `

     <div class="col-md-4" style="background-image:url('${phone.image}');background-repeat: no-repeat; background-position: center center; background-size: fit;">
          <div style="height:300px"></div>
      </div>
      <div class="col-md-8">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <div class="card-body text-start">
              <h3 class="card-title">${phone.name}</h3>
              <p class="area">Release Date: <span>${phone.releaseDate ? phone.releaseDate : 'No Relesed Date Found!' }</span></p>
              <h6 class="category">Brand: <span>${phone.brand}</span></h6>
              <hr>
              <h5>Features:</h5>
              <p class="card-text">Sensors: ${phone.mainFeatures.sensors}...</p>
            </div>
        </div>
    </div>    
     `;
     phoneDetailsContainer.textContent = "";
     phoneDetailsContainer.appendChild(phoneInfoContainer);
 }
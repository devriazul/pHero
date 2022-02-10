document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');

    const depositAmount = depositInput.value;
    // console.log(depositAmount);

    // get current deposit

    const depositTotal = document.getElementById('deposit-total');

    const depositTotalText = depositTotal.innerText;
    depositTotal.innerText = parseFloat (depositTotalText) + depositAmount;
    // console.log(depositTotalText);


    // clear input field
    depositInput.value = '';
})
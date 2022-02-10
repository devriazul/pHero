document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');

    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // console.log(depositAmount);

    // get current deposit

    const depositTotal = document.getElementById('deposit-total');

    const depositTotalText = depositTotal.innerText;
    const previusDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previusDepositTotal + depositAmount;
    // console.log(depositTotalText);


    // clear input field
    depositInput.value = '';
})
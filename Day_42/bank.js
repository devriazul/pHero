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

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previusBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previusBalanceTotal + depositAmount;

    // clear input field
    depositInput.value = '';
});
// Handle withdraw 

document.getElementById('withdraw-button').addEventListener('click', function(){
   const withdrawInput = document.getElementById('withdraw-input');
   const withdrawAmountText = withdrawInput.value;
   const withdrawAmount = parseFloat(withdrawAmountText);

   // update total
   const withdrawTotal = document.getElementById('withdraw-total');
   const preWithdrawTotalText = withdrawTotal.innerText;
   const preWithdrawTotal = parseFloat(preWithdrawTotalText);
   withdrawTotal.innerText = preWithdrawTotal + withdrawAmount;

   //clear withdraw input

   withdrawInput.value = '';

})
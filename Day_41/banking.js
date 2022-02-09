// Handle deposit button

document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');

    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
// update deposit total
    const depositTotal = document.getElementById('deposit-total');

    const previusDepositText = depositTotal.innerText;
    const previusDepositAmount = parseFloat(previusDepositText);

    const newDepositTotal = previusDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    // clear input field 

// update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previusBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previusBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    depositInput.value = '';
});



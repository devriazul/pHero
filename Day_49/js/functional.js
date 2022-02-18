function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}
function updateTotal(fieldId, amount){
    const totalTag = document.getElementById(fieldId);
    const previusTotalInText = totalTag.innerText;
    const previusTotal = parseFloat(previusTotalInText);
    const newTotal = previusTotal + amount;
    totalTag.innerText = newTotal;
    return newTotal;
}
function updateBalance(){
    const balanceTag = document.getElementById('balance-total');
    const balanceInText = balanceTag.innerText;
    const previusBalance = parseFloat(balanceInText);
    const newBalance = previusBalance + amount;
    balanceTag.innerText = newBalance;
}
document.getElementById('deposit-button').addEventListener('click',function(){
    const amount = getInputValue('deposit-input');
    updateTotal('deposit-total', amount);
    updateBalance(amount);
});

// handle withdraw

document.getElementById('withdraw-button').addEventListener('click',function(){
    const amount = getInputValue('withdraw-input');
    updateTotal('withdraw-total',amount);
});
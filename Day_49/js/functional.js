function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
};
function updateTotal(fieldId, amount){
    const totalTag = document.getElementById(fieldId);
    const previusTotalInText = totalTag.innerText;
    const previusTotal = parseFloat(previusTotalInText);
    const newTotal = previusTotal + amount;
    totalTag.innerText = newTotal;
    return newTotal;
};
function updateBalance(amount, isAdding){
    const balanceTag = document.getElementById('balance-total');
    const balanceInText = balanceTag.innerText;
    const previusBalance = parseFloat(balanceInText);
    let newBalance; 
    if(isAdding == true){
        newBalance = previusBalance + amount;
    }else{
        newBalance = previusBalance - amount;
    }
    
    balanceTag.innerText = newBalance;
};
document.getElementById('deposit-button').addEventListener('click',function(){
    const amount = getInputValue('deposit-input');
    if (amount > 0){
    updateTotal('deposit-total', amount);
    updateBalance(amount, true);
    }
});

// handle withdraw

document.getElementById('withdraw-button').addEventListener('click',function(){
    const amount = getInputValue('withdraw-input');
    if(amount > 0){
    updateTotal('withdraw-total',amount);
    updateBalance(amount,false);
    }
});

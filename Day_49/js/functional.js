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

}
document.getElementById('deposit-button').addEventListener('click',function(){
    const amount = getInputValue('deposit-input');
    updateTotal('deposit-total', amount)
});
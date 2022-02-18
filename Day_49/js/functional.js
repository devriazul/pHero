function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}

document.getElementById('deposit-button').addEventListener('click',function(){
    const amount = getInputValue('deposit-input');
    console.log(amount);
});
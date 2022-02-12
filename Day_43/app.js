function updateCaseNumber(isIncreasing){
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    if (isIncreasing == true){
        caseInput.value =parseInt (caseNumber) +1;
    }else if(caseNumber > 0){
        caseInput.value = parseInt(caseNumber) -1;
    }
}

document.getElementById('case-plus').addEventListener('click', function(){
    updateCaseNumber(true);
});
document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseNumber(false);
    
})
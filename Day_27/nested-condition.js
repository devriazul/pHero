var danishPrice = 50;
var butterBread = 25;
var toastBiscuit = 10;
var myBudget = 90;
var packedWell = false;

// if (danishPrice < myBudget) {
//     console.log('Danish Khabo');
// }else if (butterBread < myBudget){
//     console.log('butter bon khamu');
// }else if (toastBiscuit < myBudget){
//     console.log ('Toast Khamu');
// }else{
//     console.log('batasha khamu');
// }


if (danishPrice < myBudget){
    if (packedWell == true){
        console.log('Danish Khabo');
    }else{
        console.log('Machi Khaya felce');
    }
}else{
    console.log('Taka nai vai');
}
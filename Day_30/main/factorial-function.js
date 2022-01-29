// let factorial = 1;
// for (let i = 1; i <=5; i++) {
//     factorial = factorial * i; 
// }
// console.log(factorial);

function getFactorial(number){
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;        
    }
    return factorial;
}

var firstFactorial = getFactorial(7);
console.log('Factorial of 7 is: ', firstFactorial);


var firstFactorial = getFactorial(7);
console.log('Factorial of 7 is: ', firstFactorial);
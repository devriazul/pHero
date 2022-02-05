// let sum = 0;
// for (let i = 5; i >= 1; i--) {
//     sum = sum + 1;
    
// }
// console.log(sum);

function sum(i){
    console.log(i);
    return i + sum(i--);
}
console.log(sum(5));
const numbers = [11, 2, 4, 5, 7];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;    
}
console.log(sum);


function arrayTotal (numbers){
    let sum =0;
    for (let i = 0; i < numbers.length; i++) {
       const element = numbers[i];
       sum = sum + element;
       return sum;         
    }
}
const numbers = [3,2,19,4,30,2,40,5,67,8,9];

//slice
// const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced);
// console.log(numbers);

//splice to remove element from an array
// const numberSpliced = numbers.splice(4,2);
// console.log(numbers);
// console.log(numberSpliced);

const numberSpliced2 = numbers.splice(4, 3, 99, 111, 888, 999);
console.log(numberSpliced2);
console.log(numbers);
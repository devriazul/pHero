function addNumber(num1, num2){
    console.log(arguments[1]);
    const result = num1+num2;
    return result;
}
const sum = addNumber (23, 13, 100, 200);
console.log(sum);
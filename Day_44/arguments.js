function addNumber(num1, num2){
    // console.log(arguments[1]);
    for(const num of arguments){
        sum = sum + num;
    }
}
const sum = addNumber (23, 13, 100, 200);
console.log(sum);
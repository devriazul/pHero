function addNumber(num1, num2){
    // console.log(arguments[1]);
    let result = 0;
    for(const num of arguments){
        result = result + num;
    }
    return result;
}
const result = addNumber (23, 13, 100, 200);
console.log(result);
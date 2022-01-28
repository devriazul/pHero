function addTwoNumbers(number1,number2){
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}

var fisrtNumber = 35;
var secondNumber = 47;
var result = addTwoNumbers(fisrtNumber,secondNumber);
console.log('result value', result);


// function multiply two numbers 

function multiplyTwoNumbers(num1,num2){
    var result = num1 * num2;
    return result;
}

var totalAmount = multiplyTwoNumbers(5,100);
console.log('Total Taka:',totalAmount);

// Substraction function (-)

function substractionBetwenTwo(nums1,nums2){
    var subsResult = nums1 - nums2;
    return subsResult;
}
var totalAfterSubs = substractionBetwenTwo(1000,400);
console.log('Total Figure after Substract:', totalAfterSubs);



// Divide function (/)
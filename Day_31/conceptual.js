//--make a calculator

// function sumOfNumbers (num1, num2){
//     var result = num1 + num2;
//     return result;
// }

// console.log(sumOfNumbers(20,9));

//--Problem solving with function



//-- write a function for a food delivery service that sell "pizza" only.Each pizza price $10, this function takes the food name & quantity as parameter and then return a custom message with order info. This function should be smart enought to handle wrong parameter inputs.

function pizzaPanda (foodName, quantity){
    if (foodName.toLowerCase() !== "pizza") {
        return "Sorry we sell pizza only!";
    }

    var price = 10 * quantity;
    var customMessage = "Order Successfull! Order Info : " + foodName + ", Price: "+ price + "$";
    return customMessage;
}

console.log(pizzaPanda('Pizza',3));
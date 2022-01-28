var computer = {
    color: "silver",
    price: 28000,
    storage: "256GB",
    processor: "i5"
};

//3rd way to change value of object
var storageProperty = "storage";
computer['storage'] =512;

// 1st way to change value 
computer.price = 20000;

computer["price"] = 19000; //2nd way of declare object property for change
var computerPrice = computer.price;
console.log(computer);
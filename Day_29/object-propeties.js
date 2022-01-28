var computer = {
    color: "silver",
    price: 28000,
    storage: "256GB",
    processor: "i5"
};

var storageProperty = "storage";
computer['storage'] =512;
computer.price = 20000;
computer["price"] = 19000; //alternative way of declare object property for change
var computerPrice = computer.price;
console.log(computer);
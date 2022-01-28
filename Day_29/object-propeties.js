var computer = {
    color: "silver",
    price: 28000,
    storage: "156GB",
    processor: "i5"
};
computer.price = 20000;
computer["price"] = 19000; //alternative way of declare object property for change
var computerPrice = computer.price;
console.log(computer);
const products = [
    {name: 'laptop', price: 42000 },
    {name: 'shirt', price: 2000 },
    {name: 'watch', price: 4000 },
    {name: 'phone', price: 24000 },

];

let totalPrice = 0;

for (const product of products) {
    totalPrice = totalPrice + product.price;
    
}
console.log(totalPrice);
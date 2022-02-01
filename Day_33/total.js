const cart = [
    {name: 'laptop', price: 42000 , quantity: 3 },
    {name: 'shirt', price: 2000 , quantity: 3 },
    {name: 'watch', price: 4000 , quantity: 3 },
    {name: 'phone', price: 24000 , quantity: 3 },

];

// let totalPrice = 0;

// for (const product of products) {
//     totalPrice = totalPrice + product.price;
    
// }
// console.log(totalPrice);

let cartTotal = 0;
for (const product of cart){
    // console.log(product);
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal +productTotal;

}
console.log(cartTotal);
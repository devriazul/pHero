const products = [
    {name: 'iphone', price: '20000'},
    {name: 'samsung', price: '10000'},
    {name: 'lenovo', price: '50000'},
    {name: 'smartwatch', price: '2000'},
    {name: 'applewatch', price: '7000'},
    {name: 'asus', price: '35000'},
];

for (const product of products){
    if(product.price < 5000){
        break;
    }
    console.log(product);
}
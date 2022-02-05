const product = [
    {name: 'iphone', price: '20000'},
    {name: 'samsung', price: '10000'},
    {name: 'lenovo', price: '50000'},
    {name: 'smartwatch', price: '2000'},
    {name: 'applewatch', price: '7000'},
    {name: 'asus', price: '35000'},
];

function searchProducts(products, seatchText){
    for(const product of products){
        console.log(product.name);
    }
}
searchProducts(product);
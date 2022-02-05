const product = [
    {name: 'iphone', price: '20000'},
    {name: 'samsung', price: '10000'},
    {name: 'lenovo', price: '50000'},
    {name: 'smartwatch', price: '2000'},
    {name: 'applewatch', price: '7000'},
    {name: 'asus', price: '35000'},
];

function searchProducts(products, seatchText){
    const result = [];
    for(const product of products){
        if(product.name.includes(seatchText)){
            result.push(product);
        }
    }return result;
}
const matched= searchProducts(product, 'asus');
console.log(matched);
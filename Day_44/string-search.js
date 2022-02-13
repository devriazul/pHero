const products = [
    'Dell hardcore i29 200GB Laptop',
    'Iphone 1TB rom',
    'yellow laptop with black camera',
    '1X59 Lenovo commercial Yoga Laptop',
    'HTC Low Price Phone',
    'Purple color phone and laptop'
]

const searching = 'laptop';

// indexOf

const output = [];
for (const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        // output.push(product);
    }
}
// console.log(output);

for (const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        output.push(product);
    }
}
console.log(output);

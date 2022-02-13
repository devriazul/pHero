const products = [
    'Dell hardcore i29 200GB Laptop',
    'Iphone 1TB rom',
    'yellow laptop with black camera',
    '1X59 Lenovo commercial Yoga Laptop',
    'HTC Low Price Phone',
    'Dell Purple color phone and laptop'
]

const searching = 'Dell';

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
        // output.push(product);
    }
}
console.log(output);

for(const product of products){
    if(product.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(product);
    }
}
console.log(output);

// endsWith
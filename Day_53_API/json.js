// JS Object 
//JSON
const user = { id: 11, name: 'Riaz', Job: 'Developer'}
const stringified = JSON.stringify(user);
// console.log(stringified);
// console.log(user);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir Road',
    Products: ['Laptop','mobile','pepsi'],
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(stringified);
console.log(converted);
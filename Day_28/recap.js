var bottleColor = "yellow";
var waterQuantity = 1;
var isFull = false;

// Array

var items = ['bottle', 'mug', 'paper', 'pen'];
items.indexOf('paper');

items.push('envelope');
items.push('watch');
items.pop();

console.log(items);

// condition 


if (items.length >=4) {
    console.log('you have too many stuff');
}else if (items.length == 4) {
    console.log('you have hali desk');
}
else{
    console.log('wow your desk is clean');
}

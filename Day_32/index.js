// var sum = 13.67;

// console.log(Math.floor(sum));

// const number = -78;
// const answer = Math.abs(number);
// console.log(answer);

// var a=2; 
// var b=3; 
// if (a < b) {
//     console.log("Hello");
// }

// function add(a, b){
//     return a+b;
// }
// const vari= add(1,2);
// console.log(vari);

// function add(a, b){
//     return a + b;
//   }
//   console.log(add("adam" + "eve"))

var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
  var letter = sentence[i];
  if(letter == 'a'){
    count++;
  }
}
console.log(count)
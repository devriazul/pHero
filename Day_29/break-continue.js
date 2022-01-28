// var i =0;
// while (i<15) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
//     i++;
// }

// for (var i = 0; i < 20; i++){
//     console.log(i);
//     if (i==7) {
//         break;
//     }
// }

var numbers = [1, 2, 3, 5, 4, 6, 7];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers [i];
    console.log(number);  
    if(number > 5){
        break;
    }  
}
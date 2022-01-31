const business = 450;
const minister = 250;
const army = 350;

// if (business > minister) {
//     console.log("Business man er pola boroloks!");
// }else{
//     console.log("Ministerer pola boroloks");
// }

 
// Compare 3 person
/*
if (business > minister && business > army) {
    console.log("Business best");
}else if (minister > business && minister > army) {
    console.log("Minister best");
}else {
    console.log("Army bigger");
}
*/


// find the largest by Math
var max = Math.max(business, minister, army);
console.log("Largest is: ", max);



// Find biggest number with function
function findLargest(first, second){
    if (first > second) {
        return first;
    }else{
        return second;
    }
}

const larger = findLargest (300, 200);
console.log("Largest is ", larger);


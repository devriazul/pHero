const business = 450;
const minister = 550;
const army = 350;

// if (business > minister) {
//     console.log("Business man er pola boroloks!");
// }else{
//     console.log("Ministerer pola boroloks");
// }

if (business > minister && business > army) {
    console.log("Business best");
}else if (minister > business && minister > army) {
    console.log("Minister best");
}else {
    console.log("Army bigger");
}
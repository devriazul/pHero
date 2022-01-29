// inch to feet

function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}

var inches = 132;
var feet = inchToFeet(inches);
console.log(feet);


var inches = 140;
var feet = inchToFeet(inches);
console.log(feet);

var inches = 640;
var feet = inchToFeet(inches);
console.log(feet);

// miles to kilometer

function mileToKm(miles){
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKm(26.2);
console.log(marathon);


// video 2 completed
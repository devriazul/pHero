var age = 18;
var vaccineCount = 2;
var isVaccinated = false;

if (age > 20 && vaccineCount == 2) {
    console.log("You may go to foreign...");
}
if(age > 15 && age < 20 && vaccineCount == 0){
    console.log("Your vaccine date is tomorrow...");
}
if(age > 15 && age < 20 && vaccineCount == 2){
    isVaccinated = true;
    console.log("You are vaccinated!");
}
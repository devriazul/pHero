var number = [90, 79, 65, 54, 50, 33, 32, 88];
var student = ['Nahid', 'Chuya', 'Jarin', 'Sumaiya', 'Romana', 'Sachin', 'Dipanta', 'Barsha'];
// if..else with for loop
for (var i = 0; i < student.length; i++) {
if (number[i] >= 80 && number[i] <= 100) {
console.log(student[i] + ': A+')
} else if (number[i] >= 70 && number[i] < 80) {
console.log(student[i] + ': A')
} else if (number[i] >= 60 && number[i] < 70) {
console.log(student[i] + ': A-')
} else if (number[i] >= 50 && number[i] < 60) {
console.log(student[i] + ': B')
} else if (number[i] >= 40 && number[i] < 50) {
console.log(student[i] + ': C')
} else if (number[i] >= 33 && number[i] < 40) {
console.log(student[i] + ': D')
} else if (number[i] < 33) {
console.log(student[i] + ': F')
}
}
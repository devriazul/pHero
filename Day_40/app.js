const allButton = document.getElementsByClassName("button-test");
const prime = document.getElementById("prime");

console.log(allButton);
// console.log(prime);

// for (const button of allButton){
//     console.log(button);
// }

for (let i = 0; i < allButton.length; i++) {
    const element = allButton[i];
    console.log(element);
    
}
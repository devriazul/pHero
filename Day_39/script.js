function makeRed(){
    document.body.style.backgroundColor = "Red";
}

const yellowButton = document.getElementById('make-yellow');
yellowButton.onclick = makeYellow; 

function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}

const greenButton = document.getElementById('make-green');
console.log(greenButton);
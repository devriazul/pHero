function makeRed(){
    document.body.style.backgroundColor = "Red";
}

const yellowButton = document.getElementById('make-yellow');
yellowButton.onclick = makeYellow; 

function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}


//anonymus function
const greenButton = document.getElementById('make-green');
greenButton.onclick = function makeGreen(){
    document.body.style.backgroundColor = 'green';
}
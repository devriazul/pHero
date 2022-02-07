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

//

const goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener('click',makeGoldenRod);

function makeGoldenRod(){
    document.body.style.backgroundColor = 'gold';
}

const hotPink = document.getElementById('make-hotpink');
hotPink.addEventListener('click', function(){
    document.body.style.backgroundColor = 'pink';
})

document.getElementById('light-blue').addEventListener('click',function(){
    document.body.style.backgroundColor = 'lightblue';
})
var color = 'yellow';

if (color == 'blue') {
    console.log('color is blue');
}else if (color == 'green') {
    console.log('color is green');
}else if (color == 'yellow') {
    console.log('color is yellow');
}else if (color == 'white') {
    console.log('color is white');
}else {
    console.log('color is black');
}

switch(color){
    case 'blue':
        console.log('color is blue');
        break;
    case 'green':
        console.log('color is green');
        break;
    case 'yellow':
        console.log('color is yellow');
        break;
    default:
        console.log('color is black');
}
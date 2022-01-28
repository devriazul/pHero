var skyColor = "white";

var phones = ['xiomi', 'samsung', 'htc', 'apple'];
phones[2] = 'walton';

// check oppo an element in exist in array 

if(phones.indexOf('oppo') == -1){
    console.log('oppo is missing');
}

if(phones.indexOf('lg')!= -1){
    console.log('LG is Available');
}else console.log('LG not available');


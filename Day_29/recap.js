// 1. Variable 

var favouriteBook = '4 Hour Work Week';

// 2.array 
var bookList = ['love story', 'dead story', 'twilight', 'hooked', 'start with why', 'shoe dog'];

var indexFind = bookList.indexOf('shoe dog');
bookList[3] = 'story brand';
bookList.push('small giant');
bookList.pop();

// 3.condition 

if (bookList[1] == 'hooked'){
    console.log('i am hooked');
}else
    console.log('I am not hooked');

// 4.Loop 

// While Loop

var i =0;
while(i < 15){
    console.log(i);
    console.log('loop');
    i++;
}

//for loop

for (var i = 0; i < 15; i++) {
    console.log(i);
    
}

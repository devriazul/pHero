const anthem = "Amar sonar bangla ami tomay valobashi";
const words = anthem.split(' ');
const withoutA = anthem.split('a')
// console.log(withoutA);

//slice
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

// substr
const anotherPart = anthem.substr(11, 7);
// console.log(anotherPart);

// substring
const anotherAnotherPart = anthem.substring(11, 15);
console.log(anotherAnotherPart);

// concat string always immutable
const first = 'amader';
const second = 'city';

// const fullString = first + second;
const fullString = first.concat(second);
console.log(fullString);

const words2 = ['a', 'b', 'c'];
const allJoined = words.join('');
console.log(allJoined);
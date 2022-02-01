const names = ['abul', 'kabul', 'babul', 'abul', 'kabul', 'babul'];

function removeDuplicate(names){
    const unique = [];
    // for (let i = 0; i < names.length; i++) {
    //     const element = names[i];
    // }
    for (const element of names){
        console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
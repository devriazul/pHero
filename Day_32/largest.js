function largetElement(numbers){
    let largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }    
    }
    return largest;
}

const ages = [12, 14, 16, 18, 20];
const oldest = largetElement(ages);
console.log('oldest: ', largest);
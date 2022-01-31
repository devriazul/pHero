// 0, 1, 2 ,3 ,4 5, 6, 7, 8, 9

/*
3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 4th+ 3rd
nth = (n-1)th + (n-2)th
ith = (i-1)th + (i-2)th
*/

/*
const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    // nth = (n-1)th + (n-2)th
    // ith = (i-1)th + (i-2)th

    fibo[i] = fibo [i - 1]+ fibo[i - 2];
}
console.log(fibo);
*/

function fibonacciSeries(num){
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i]= fibo[i-1]+[i-2];
        
    }
    return fibo;
}

const fiboSeries = fibonacciSeries(-15);
console.log(fiboSeries);
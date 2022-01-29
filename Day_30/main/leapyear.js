function isLeapYear(year){
    if (year % 4 == 0) {
        return true;
    }else{
        return false;
    }
}

const myYear = 2080;
const isMyYearLeap = isLeapYear(myYear);
console.log("Is my Year Leap Year", isMyYearLeap);
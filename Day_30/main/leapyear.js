function isLeapYear(year){
    if (year % 4 == 0) {
        return true;
    }else{
        return false;
    }
}

const myYear = 2087;
const isMyYearLeapYear = isLeapYear(myYear);
console.log("Is my Year Leap Year", isMyYearLeapYear);

const yourYear =2000;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log("is your year leap year", isYourYearLeapYear);
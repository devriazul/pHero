function isLeapYear(year){
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true;
    }else{
        return false;
    }
}

const myYear = 2087;
const isMyYearLeapYear = isLeapYear(myYear);
console.log("Is my Year Leap Year", isMyYearLeapYear);

const yourYear =2100;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log("is your year leap year", isYourYearLeapYear);
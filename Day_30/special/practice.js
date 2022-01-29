// var glass = "water";
// console.log(glass);

// var myName = 'Riaz';
// console.log(myName);


// 1. Primtive Data type 
    // a. String Data Type 

    var fName = "Riazul";
    var lName = "Islam";

    var myName = fName+" "+lName;

    console.log(myName);

    // 2. Number Data Type
    

    var age = 30;
    var cgpa = "3.21";
    var sum = age + parseFloat(cgpa);
    console.log(sum);

    // 3. Boolean Data Type

    var number1 = 60;
    var number2 = 70;
    console.log(number1 == number2);

    // undefined data type

    var rollnumber;
    console.log(rollnumber);

    // null data type

    var x = null;
    console.log(x);

    // if condition


    var number3 = 20;
    var number4 = 50;

    if (number3 > number4) {
        console.log("Number three is big");
    }else{
        console.log("Number three is not big");
    }

    // odd or even number detect 


    var riaz = 51;
    if (riaz % 2 == 0) {
        console.log("This is an even number");
    }else{
        console.log("This is an odd number");
    }

    // ternary operator

    var hridoy = 28;
    var selim = 40;
    var result = (selim > hridoy) ? "Selim is old from hridoy" : "Hridoy is old man from selim";
    console.log(result);
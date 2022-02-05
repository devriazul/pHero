// Problem 1: ana to vori

function anaToVori(ana){
    if(typeof(ana) === 'number'){
        if(ana>=0){
            return ana / 16;
        }else if(ana < 0){
            return 'Please input a positive value.';
        }
    }else if(typeof(ana)!== Number){
        return 'Input must be a number type.';
    }
}
/* console.log(anaToVori('32'));
console.log(anaToVori(-32));
console.log(anaToVori(32)); */

// Problem 2:

function pandaCost(singraQuantity, samuchaQuantity, jilapiQuantity){
    const perSingraPrice = 7;
    const perSamuchaPrice = 10;
    const perJilapiPrice = 15;
    if(typeof(singraQuantity) === 'number' && typeof(samuchaQuantity) === 'number' && typeof(jilapiQuantity) === 'number'){
        if(singraQuantity < 0 || samuchaQuantity < 0 || jilapiQuantity < 0){
            return 'Please input positive number.';
        }else{
            return (singraQuantity * perSingraPrice) + (samuchaQuantity * perSamuchaPrice) + (jilapiQuantity * perJilapiPrice);
        }
    }else{
        return 'Input must be a number type.'
    }
}
/* console.log(pandaCost('0',0,1));
console.log(pandaCost(5,-2,1));
console.log(pandaCost(2,3,1)); */

// Problem 3:

function picnicBudget(numberOfPerson){
    const firstCatagory = 5000;
    const secondCatagory = 4000;
    const lastCatagory = 3000;
    let totalCost = 0;
    let remainingPerson = 0;
    if(typeof numberOfPerson === 'number'){
        switch(true){
            case (numberOfPerson > 200):
                totalCost = 100 * firstCatagory;
                totalCost += 100 * secondCatagory;
                remainingPerson = numberOfPerson-200;
                totalCost += remainingPerson*lastCatagory;
                return totalCost;
                break;
            case (numberOfPerson>100):
                totalCost = 100 * firstCatagory;
                remainingPerson = numberOfPerson-100;
                totalCost += remainingPerson * secondCatagory;
                return totalCost;
                break;
            case (numberOfPerson>=0):
                totalCost=numberOfPerson * firstCatagory;
                return totalCost;
                break;
            default:
                return 'please input a positive no. of person!';
            
        }
    }else{
        return 'please input a number!';
    }
}
/*
console.log(picnicBudget('90'));
console.log(picnicBudget(-10));
console.log(picnicBudget(0));
console.log(picnicBudget(50));
console.log(picnicBudget(100));
console.log(picnicBudget(101));
console.log(picnicBudget(199));
console.log(picnicBudget(200));
console.log(picnicBudget(201));
console.log(picnicBudget(300));
*/

// Problem 4: 

function oddFriend(nameList){
    for(const name of nameList){
        if(typeof(name)==='string'){
            if(name.length % 2 == 1){
                return name;
            }else if(name.length % 2 == 0){
                var even = 'All name here length is even value.';
            }
        }else{
            return 'Please input a string type array.';
        }
    }
    return even;
}
/*
console.log(oddFriend(['riaz','devria','mfuj','Riazul Islam',100]));
console.log(oddFriend(['riaz','devria','mfuj','Riazul Islam']));
console.log(oddFriend(['riaz','devriaz','mfuj','Riazul Islam']));
*/
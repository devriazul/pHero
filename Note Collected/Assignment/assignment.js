// 1. function for converting kilometer to meter.

function kilometerToMeter(km) {
  var toMeter = 0;
  if (km < 0) {
    return "sorry, distance can't be negetive.";
  } else {
    toMeter = km * 1000;
    return toMeter;
  }
}
// var meter = kilometerToMeter(9);
// console.log(meter);

// 2. function for calculation total cost of watch,mobile and laptop
function budgetCalculator(watchQuantity, mobileQuantity, laptopQuantity) {
  var watchPrice = 50;
  var mobilePrice = 100;
  var laptopPrice = 500;
  var sumOfBudget = 0;

  if (
    watchQuantity < 0 ||
    mobileQuantity < 0 ||
    laptopQuantity < 0 ||
    watchQuantity % 1 != 0 ||
    mobileQuantity % 1 != 0 ||
    laptopQuantity % 1 != 0
  ) {
    return "Sorry, Make sure to input all values that are positive integer. ";
  } else {
    var totalPriceOFWatch = watchPrice * watchQuantity;
    var totalPriceOfMobile = mobilePrice * mobileQuantity;
    var totalPriceOfLaptop = laptopPrice * laptopQuantity;

    sumOfBudget = totalPriceOFWatch + totalPriceOfMobile + totalPriceOfLaptop;

    return sumOfBudget;
  }
}
// var totalBudget = budgetCalculator(4, 8, 1);
// console.log(totalBudget);

//3. function for caculation total hotel cost
function hotelCost(numOfDays) {
  var rent = 0;
  if (numOfDays < 0 || numOfDays % 1 != 0) {
    return "Sorry,number of days stayed can not be negetive or a fraction.";
  } else if (numOfDays >= 0 && numOfDays <= 10) {
    rent = numOfDays * 100;

    return rent;
  } else if (numOfDays >= 0 && numOfDays <= 20) {
    var first10Days = 10 * 100;
    var remainingDays = (numOfDays - 10) * 80;
    rent = first10Days + remainingDays;
    return rent;
  } else {
    var first10Days = 10 * 100;
    var second10Days = 10 * 80;
    var remainingDays = (numOfDays - 20) * 50;

    rent = first10Days + second10Days + remainingDays;

    return rent;
  }
}
// var cost = hotelCost(25);
// console.log(cost);

// 4. function for finding out largest name in the array.
function megaFriend(friendsName) {
  var largestName = "";

  if (typeof friendsName != "object" || friendsName.length == 0) {
    return "please insert a valid array including strings of names";
  }

  for (let index = 0; index < friendsName.length; index++) {
    var element = friendsName[index];
    //checking for if an element is not a string, if string then it will proceed further...
    if (typeof element != "string") {
      return "only string is accepted inside the array.";
    } else if (largestName.length < element.length) {
      largestName = element;
    }
  }
  return largestName;
}

// var friendsName = ["oshan", "diptom", "tuheen"];
// var bigName = megaFriend(friendsName);
// console.log(typeof bigName, bigName);

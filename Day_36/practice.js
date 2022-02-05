// 1. function for converting ana to vori.

function anaToVori(ana) {
    var toVori = 0;
    if (ana < 0) {
      return "sorry, input can't be negative.";
    } else {
        toVori = ana / 16;
      return toVori;
    }
  }
//   var result = anaToVori(16);
//   console.log(result);

console.log(anaToVori('32'));
console.log(anaToVori(-32));
console.log(anaToVori(32));
  
  // 2. function for calculation total cost of singara,samucha and jilapi
  function pandaCost(singaraQuantity, samuchaQuantity, jilapiQuantity) {
    var singaraPrice = 7;
    var samuchaPrice = 10;
    var jilapiPrice = 15;
    var sumOfBudget = 0;
  
    if (
      singaraQuantity < 0 ||
      samuchaQuantity < 0 ||
      jilapiQuantity < 0 ||
      singaraQuantity % 1 != 0 ||
      samuchaQuantity % 1 != 0 ||
      jilapiQuantity % 1 != 0
    ) {
      return "Sorry, Make sure to input all values that are positive integer. ";
    } else {
      var totalPriceOfSingara = singaraPrice * singaraQuantity;
      var totalPriceOfSamucha = samuchaPrice * samuchaQuantity;
      var totalPriceOfJilapi = jilapiPrice * jilapiQuantity;
  
      sumOfBudget = totalPriceOfSingara + totalPriceOfSamucha + totalPriceOfJilapi;
  
      return sumOfBudget;
    }
  }
//   var totalBudget = pandaCost(4, 8, 1);
//   console.log(totalBudget);
  
  //3. function for caculation total Picnic Budget
  function picnicBudget(numOfPerson) {
    var totalCost = 0;
    if (numOfPerson < 0 || numOfPerson % 1 != 0) {
      return "Sorry,number of person can not be negetive or a fraction.";
    } else if (numOfPerson >= 0 && numOfPerson <= 100) {
      totalCost = numOfPerson * 5000;
  
      return totalCost;
    } else if (numOfPerson >= 101 && numOfPerson <= 200) {
      var first100Person = 100 * 5000;
      var remainingPerson = (numOfPerson - 100) * 4000;
      totalCost = first100Person + remainingPerson;
      return totalCost;
    } else {
      var first100Person = 100 * 5000;
      var second100Person = 100 * 4000;
      var remainingPerson = (numOfPerson - 200) * 3000;
  
      totalCost = first100Person + second100Person + remainingPerson;
  
      return totalCost;
    }
  }
  // var cost = picnicBudget(201);
  // console.log(cost);

  // console.log(picnicBudget('90'));
  // console.log(picnicBudget(-10));
  // console.log(picnicBudget(0));
  // console.log(picnicBudget(50));
  // console.log(picnicBudget(100));
  // console.log(picnicBudget(101));
  // console.log(picnicBudget(199));
  // console.log(picnicBudget(200));
  // console.log(picnicBudget(201));
  // console.log(picnicBudget(300));
  
  // 4. function for finding out largest name in the array.
  function oddFriend(friendList){
    for(const name of friendList){
        // take a single item from the array
        if(typeof(name)==='string'){
            // when find a string in the array 
            if(name.length % 2 == 1){
                //when find a name with odd no of length.
                return name;
            }else if(name.length % 2 == 0){
                // when all element value length is even
                var even = 'all name length is even value.';
            }
        }else{
            // when found: not a string type value
            return 'please input a string type array.';
        }
    }
    return even;
}

// console.log(oddFriend(['Riaz', 'Mahfujur', 'Rubels', 'Hridoy',100]));
// console.log(oddFriend(['Riaz', 'Mahfuj', 'Rubels', 'Hridoy']));
// console.log(oddFriend(['Riaz', 'Mahfuju', 'Rubel', 'Hridoy']));
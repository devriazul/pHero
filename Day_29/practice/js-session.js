var myName = "Oshan biswas";

age = "2.50";

var myFriends = ["abc", "xyz"];

// console.log(parseFloat(age))

var num1 = 40.5;
var num2 = "85";

// var isRaining = false ;

var frndName;

frndName = "someone";
// console.log(frndName)

var student1 = {
  firstName: "Sagar",
  lastName: "Biswas",
  age: 50,
  hobby: ["h1", "h2"],
};

var student2 = {
  firstName: "Sam",
  lastName: "Roy",
  age: 30,
};

var numbers = [1, 2, 3, 4, 5, 6];

var studentsCollection = [student1, student2];

console.log(student1.hobby[0]);

// console.log(num1 + parseInt( num2))

// console.log(student1.lastName)

// console.log(numbers.length)
// console.log(numbers[3])

// numbers.push(9)
// console.log(numbers)
// numbers.pop()
// console.log(numbers);
// numbers.shift()
// console.log(numbers);
// numbers.unshift(8)
// console.log(numbers);

// console.log(studentsCollection)
// console.log(typeof typeof 70);

var isRaining = false;
var rainSpeed = "low";

// var p = 50 ;

if (isRaining == true && rainSpeed == "high") {
  console.log("vai , ami code korbo.ajke ber hobona .");
} else if (isRaining && rainSpeed == "low") {
  console.log("vai ektu dekhi . jodi kome jai ektu pore ber hobo.");
} else {
  console.log("vai , ber hobo ajke....");
}


// আপনাকে ৩ টা ডাটা দেয়া আছে।যেখানে একজন মানুষের  বয়স , ভ্যাকসিন গ্রহণের  সংখ্যা এবং সব গুলো ভ্যাকসিন গ্রহণের স্ট্যাটাস দেয়া আছে। ভ্যারিয়েবল গুলোর ডাটার প্যাটার্ন নিচে দেয়া হলো।

//  age = 23 ;

//  vaccineCount = 1 ;

//  isVaccinated = false


// আপনাকে নিচে কয়েকটি শর্ত দেয়া হলো। শর্ত গুলো আপনাকে চিন্তা ভাবনা করে সমাধান করতে হবে। আপনি  প্রয়োজন অনুসারে ভ্যারিয়েবল গুলোর  মান পরিবর্তন করতে পারেন ।


// যাদের বয়স ২০ এর উপরে এবং যারা ২ ডোজ ভ্যাকসিন গ্রহণ করেছে তারা বিদেশ গমন করতে  পারবে।
// যাদের বয়স ১৫-২০ এর মধ্যে এবং যারা একবারও ভ্যাকসিন গ্রহণ করেনি তাদের কাছে একটি মেসেজ যাবে ভ্যাকসিন দেয়ার জন্য।
// যাদের বয়স ১৫-২০ এর মধ্যে এবং ২ ডোজ ভ্যাকসিন গ্রহণ করেছে  তাদের isVaccinated আপডেট হয়ে true হয়ে যাবে এবং তাদের কাছে একটি মেসেজ যাবে -“ আপনার ২ ডোজ  ভ্যাকসিন সম্পন্ন হয়েছে। ” ।
var age = 16;
var vaccineCount = 2;
var isVaccinated = false;

if (age > 20 && vaccineCount == 2) {
  console.log(" you may go foreign...");
}

if (age > 15 && age < 20 && vaccineCount == 0) {
  console.log(" tomorrow is the final date for your first vaccine dose.");
}

console.log("before status", isVaccinated);

if (age > 15 && age < 20 && vaccineCount == 2) {
  isVaccinated = true;
  console.log("congratulations. you are vaccinated....");
}

console.log("after status", isVaccinated);

// তোমার কাছে বর্তমানে একটা নির্দিষ্ট বাজেট রয়েছে ফ্যামিলি ট্যুর দেয়ার জন্য। যেটা budget নামক একটা ভেরিএবলে থাকবে।  নিচের প্রবলেম গুলো পড়  এবং তোমার সিদ্ধান্ত নাও  ।


// যদি তোমার বাজেট  ৫০০০ এর বেশি হয় তাহলে তুমি ফ্যামিলি কে নিয়ে ট্যুর দিবে । অন্যথায় ৫০০০ এর কম হয় তাহলে ট্যুর না দিয়ে ঘুম দিবে।  যদি তুমি ট্যুর দিতে পারো তার মানে তোমার কাছে ৫০০০ এর বেশি টাকা আছে।  এখন ধরো হোটেল ভাড়া ৪০০০। তাহলে তুমি হিসেবে করো তাহলে হাতে আর কত টাকা এক্সট্রা আছে।  যদি ২০০০এর বেশি টাকা হাতে থাকে তাহলে তুমি বারবিকিউ পার্টি করবে , না হলে ট্যুরে গিয়ে অল্প শপিং করবে।
//  solution number 2

var budget = 6000;
 var hotelCost = 4000;

if (budget > 5000) {
  console.log("yeah !!!! tour dibo,,,,");
 

  var remainingMoney = budget - hotelCost;
  console.log(remainingMoney);

  if (remainingMoney > 2000) {
    console.log(" barbique party hobe");
  } else {
    console.log("shopping korbo");
  }


} else {
  console.log("taka nai. tour na diye ghum dibo....");
}
var myBudget = 7000;

if (myBudget >5000){
    console.log("Yes tour dibo");
    var hotelRent = 4000;
    var pocketMoney = myBudget - hotelRent;
    if(pocketMoney > 2000){
        console.log("Let's start BBQ Party");
    }else{
        console.log("Let's go for shooping");
    }
}else{
    console.log("let's sleep down...");
}
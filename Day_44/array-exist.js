function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return 'Provide an Array';
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }return mega;
}
const friends = ['kutub', 'lion', 'shamol'];
const myBigBuddy = megaFriend(friends);
// console.log(myBigBuddy);

if(friends.indexOf('lion') != -1){
    // console.log('lion exist');
}

if(friends.includes('lion') == true){
    console.log('Lion Exist using includes');
}
function megaFriend(friends){
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }return mega;
}
const friends = ['kutub', 'lion', 'shamol'];
const myBigBuddy = megaFriend(friends);
console.log(myBigBuddy);
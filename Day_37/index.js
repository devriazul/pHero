function oddFriend(friendList) {
    for (let i = 0; i < friendList.length; i++) {
        if (friendList[i].length % 2 != 0 && typeof friendList[i] === "string")
            return (friendList[i]);
        else return 'Array can only be string';
    }
    return oddFriend[0];
}
console.log(oddFriend(['Kiron', 'Toufiq', 'Shawon', 'Mou', 'Ratul', 'Rakibul']));
console.log(oddFriend([25, 574, 895, 254]));
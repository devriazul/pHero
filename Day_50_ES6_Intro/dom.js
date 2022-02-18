document.getElementById('add-border').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    container.style.border = '3px solid yellow';
    container.style.padding = '10px';
});
function addBackgroundColor(){
const friends = document.getElementsByClassName('friend');
for(const friend of friends){
    friend.style.backgroundColor = 'lightblue';
}};

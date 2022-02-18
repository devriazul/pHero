document.getElementById('add-border').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    container.style.border = '3px solid yellow';
    container.style.padding = '10px';
});
document.getElementById('add-bg').addEventListener('click',function(){
    const container = document.getElementById('friend-container');
    container.style.backgroundColor = 'gray';
});
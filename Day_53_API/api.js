function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
};

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUsers(data))
};
function displayUsers(data){
    const ul = document.getElementById('users');
    for(const user of data){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name}
        Username: ${user.username}
        Email: ${user.email}
        Address: ${user.address}`;
        ul.appendChild(li);
    }
}
function loadPosts(){
    fetch('https://openapi.programming-hero.com/api/phones')
    .then(res => res.json)
    .then(data => displayPosts(data))
}

loadPosts();

function displayPosts(posts){
    console.log(posts.lenth);
}
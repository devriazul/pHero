document.getElementById('login-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get password

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if(userEmail == 'sontan@gmail.com' && userPassword == 'secret'){
        console.log('Valid User');
    }else{
        console.log("False information");
    }
})
let loginElement = document.getElementById('loginSection');
let signupElement = document.getElementById('signupSection');
let login = document.getElementById('login');
let signup = document.getElementById('signup');

//let toggle = true; // TRUE === state : loginView, FALSE === state : signupView

let timeOut = false;

login.addEventListener('click', toggleFunction)
signup.addEventListener('click', toggleFunction)


function toggleFunction() {
    if(timeOut === false) {
        timeOut = true;
        if(loginElement.classList.contains('view')) {
            loginElement.classList.add('view-exit');
            setTimeout(()=>{
                loginElement.classList.remove('view');
                loginElement.classList.remove('view-exit');
                timeOut = false;
            }, 200)

        }
        else {
            loginElement.classList.add('view')
            loginElement.classList.add('view-enter');
            setTimeout(() => {
                loginElement.classList.remove('view-enter');
            }, 200)
        }
        if(signupElement.classList.contains('view')) {
            signupElement.classList.add('view-exit');
            setTimeout(()=>{
                signupElement.classList.remove('view');
                signupElement.classList.remove('view-exit');
                timeOut = false;
            }, 200)

        }
        else {
            signupElement.classList.add('view')
            signupElement.classList.add('view-enter');
            setTimeout(() => {
                signupElement.classList.remove('view-enter');
            }, 200)
        }
    
    }    
}
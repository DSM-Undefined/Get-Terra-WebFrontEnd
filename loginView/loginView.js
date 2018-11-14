let loginElement = document.getElementById('loginSection');
let signupElement = document.getElementById('signupSection');
let login = document.getElementById('login');
let signup = document.getElementById('signup');
let loginButton = document.getElementById('loginButton');
let signupButton = document.getElementById('signupButton');
let loginID = document.getElementById('login-Id');
let loginPassword = document.getElementById('login-Password');
let signupID = document.getElementById('signup-Id');
let signupPassword = document.getElementById('signup-Password');
let signupCheckPassword = document.getElementById('signup-CheckPassword');

//let toggle = true; // TRUE === state : loginView, FALSE === state : signupView

let timeOut = false;

login.addEventListener('click', toggleFunction)
signup.addEventListener('click', toggleFunction)

loginButton.addEventListener('click', loginFunction)
signupButton.addEventListener('click', signupFunction)

function loginFunction() {
    axios.post('http://52.78.227.70:5000/login', {
        "userId": loginID.value,
        "password": loginPassword.value,
    }, {
        headers: { "Content-Type": "application/json" }
    },
    )
    .then(response => {
        alert("로그인에 성공하셨습니다.")
        //console.log(typeof response.data.access_token)
        localStorage.setItem("JWT", response.data.access_token)
    })
    .catch(reject => {
        alert("로그인에 실패하셨습니다.")
    })
}

function signupFunction() {
    if(signupCheckPassword.value !== signupPassword.value)
        alert("비밀번호와 같지 않습니다!")
    else {
        axios.post('http://52.78.227.70:5000/signup', {
            "userId": signupID.value,
            "password": signupPassword.value,
        }, {
            headers: {"Content-Type": "application/json"}
        },
        )
        .then(response => {
            alert("회원가입에 성공하셨습니다.")
        })
        .catch(alert("회원가입에 실패하셨습니다."))
    }
}

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
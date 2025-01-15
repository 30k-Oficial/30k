const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginEmail = document.querySelector('#loginEmail');
const loginPassword = document.querySelector('#loginPassword');
const btn_login = document.querySelector('#login');

loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
});

signupTab.addEventListener('click', () => {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
});

// Função para validar e-mail
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Função para mostrar erro
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Função para mostrar sucesso
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Event listener para o formulário de login
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail');
    const password = document.getElementById('loginPassword');

    if (email.value === '') {
        showError(email, 'E-mail é obrigatório');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'E-mail inválido');
    } else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'Senha é obrigatória');
    } else {
        showSuccess(password);
    }
});

// Event listener para o formulário de cadastro
signupForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('signupName');
    const email = document.getElementById('signupEmail');
    const password = document.getElementById('signupPassword');
    const password2 = document.getElementById('signupPassword2');

    if (name.value === '') {
        showError(name, 'Nome é obrigatório');
    } else {
        showSuccess(name);
    }

    if (email.value === '') {
        showError(email, 'E-mail é obrigatório');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'E-mail inválido');
    } else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'Senha é obrigatória');
    } else {
        showSuccess(password);
    }

    if (password2.value === '') {
        showError(password2, 'Confirmação de senha é obrigatória');
    } else if (password.value !== password2.value) {
        showError(password2, 'As senhas não coincidem');
    } else {
        showSuccess(password2);
    }
});


//Função Para login via JS Front-end


btn_login.addEventListener('click', ()=> {

    if (loginEmail.value == 'ayanowho@gmail.com' && loginPassword.value == 'ayano30k@2025' ) {

        window.location = '../../usuarios/ayano30k/ayano30k.html';

    }
})

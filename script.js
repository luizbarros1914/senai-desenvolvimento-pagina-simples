const emailInput = document.getElementById ('email')
const senhaInput = document.getElementById ('senha')


function login() {
    if(emailInput.value == 'admin@email.com' && senhaInput.value == 'senha') {
        alert('Login feito com sucesso');
        window.location.href = 'adm.html';
    } else {
        alert('Email e/ou senha incorretos')
    }
}
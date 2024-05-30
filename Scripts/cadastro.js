document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('isenha').value;
    const confirmPassword = document.getElementById('iconfsenha').value;
    const message = document.getElementById('msg');

    if (password !== confirmPassword) {
        message.textContent = 'As senhas não coincidem.';
        message.classList.remove('success');
        message.classList.add('error');
    } else {
        message.textContent = 'Cadastro realizado com sucesso!';
        message.classList.remove('error');
        message.classList.add('success');

        setTimeout(() => {
            history.back();
        }, 1000);
    }
});

function showpassword() {
    let inputPass = document.getElementById('isenha')
    let btnShowPass = document.getElementById('btn-password')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    } else {
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
}

function showconfirmpassword() {
    let inputConfirmPass = document.getElementById('iconfsenha')
    let btnShowConfirmPass = document.getElementById('btn-confirmpassword')

    if(inputConfirmPass.type === 'password'){
        inputConfirmPass.setAttribute('type', 'text')
        btnShowConfirmPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    } else {
        inputConfirmPass.setAttribute('type', 'password')
        btnShowConfirmPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
}
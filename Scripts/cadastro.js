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
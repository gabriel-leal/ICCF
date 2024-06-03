document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('insenha').value;
    const confirmPassword = document.getElementById('icnsenha').value;
    const message = document.getElementById('msg');

    if (password !== confirmPassword) {
        message.textContent = 'As senhas não coincidem.';
        message.classList.remove('success');
        message.classList.add('error');
    } else {
        message.textContent = 'Cadastrado com Sucesso!';
        message.classList.remove('error');
        message.classList.add('succes');
    }
})
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const login = document.getElementById('ilogin').value;
    const password = document.getElementById('isenha').value;
    const url = `http://localhost:8000/login/${login}/${password}`;

    fetch(url, {
        method: 'get',
        headers: {
            'content-type': 'application/json'
        },
    }).then(res => res.json()).then(data => {
        console.log(data)
        const message = document.getElementById('msg');
        message.textContent = data;
        //if (data == "jaexiste") {
        //    message.textContent = 'Cadastro já existe!';
        //    message.classList.remove('success');
        //    message.classList.add('error');
        //} else {
        //    message.textContent = 'Cadastro realizado com sucesso!';
        //    message.classList.remove('error');
        //    message.classList.add('success');
        //}
    })
});


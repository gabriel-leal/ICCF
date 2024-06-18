document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const login = document.getElementById('ilogin').value;
    const password = document.getElementById('isenha').value;
    const url = `http://localhost:8000/login/${login}/${password}`;
    let incorrect = document.querySelector('.incorrect');

    fetch(url, {
        method: 'get',
        headers: {
            'content-type': 'application/json'
        },
    }).then(res => res.json()).then(data => {
        console.log(data)
        const message = document.getElementById('msg');
        if (data[0] == '0' || data[1] == '0'){
            incorrect.textContent = 'Email ou senha incorreto!';
        } else {
            incorrect.textContent = 'Login realizado'
            incorrect.style.color = 'green'
        }
    })
});
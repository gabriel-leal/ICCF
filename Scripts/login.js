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
    })
});


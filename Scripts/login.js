document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const login = document.getElementById('ilogin').value;
    const password = document.getElementById('isenha').value;
    const url = `http://localhost:8080/login/${login}/${password}`;
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
            incorrect.style.color = 'red'
            localStorage.setItem("logado", "")
        } else {
            incorrect.textContent = 'Login realizado'
            incorrect.style.color = 'green'
            localStorage.setItem("logado", data[2])
            window.location.href = "http://localhost:8000"
        }
    })
});

// olhinho mostra senha 
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
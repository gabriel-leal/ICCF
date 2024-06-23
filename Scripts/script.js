function meuload() {
    let logado = localStorage.getItem('logado')
    if (logado == "") {
        document.getElementById('inome').innerHTML = 'Entrar'
    } else {
         document.getElementById('inome').innerHTML = 'Olá, ' + localStorage.getItem('logado')
    }
}
const hamburger = document.querySelector("#toggle-btn");

hamburger.addEventListener("click", function(){
    document.querySelector("#sidebar").classList.toggle("expand");
})

window.onload = meuload();

function sair() {
    localStorage.setItem('logado', "")
    document.getElementById('inome').innerHTML = 'Entrar'
    window.location.href = "http://localhost:8000"
}
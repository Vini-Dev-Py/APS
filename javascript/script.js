// muda de pagina

function mudarDePagina() {

    var urlAtual = window.location.href
 
    if (urlAtual === "http://127.0.0.1:5500/Conta.html") {
        var url = "Conta.html"

        window.location.href = url
    } else {
        var url = "ContaLogar.html"

        window.location.href = url
    }
}

// verifica os campos de registro

function verificar() {
    var nome = (document.getElementById("nome").value).toLowerCase();
    var email = (document.getElementById("Email").value).toLowerCase();
    var tel = document.getElementById("tel").value;
    var end = (document.getElementById("end").value).toLowerCase();
    var senha = document.getElementById("senha").value;
    var Csenha = document.getElementById("Csenha").value;

    if (nome != "" && email != "" && tel != "" && end != "" && senha != "" && Csenha != "") {

        if (senha === Csenha) {
            popup.innerHTML = '<p class="textos">Registro feito com sucesso !</p>'
            container.classList.toggle("active")
        } else {
            popup.innerHTML = '<p class="textos">As senhas informadas não batem !</p>'
            container.classList.toggle("active")
        }    
    } else {
        popup.innerHTML = '<p class="textos">Existe campos vazios</p>'
        container.classList.toggle("active")
    }
}

// verifica os campos de login

function logar() {
    var email = (document.getElementById("Email").value).toLowerCase();
    var senha = document.getElementById("Senha").value;

    var container = document.getElementById("container");
    var popup = document.getElementById("popup");

    if (email === "admin@email.com" && senha === "12345") {
        popup.innerHTML = '<p class="textos">Login efetuado com sucesso !</p>'
        container.classList.toggle("active")
    } else {
        if (email === "" && senha === "") {
            popup.innerHTML = '<p class="textos">Campos Vazios</p>'
            container.classList.toggle("active")
        } else if (email != "admin@email.com") {
            if (email === undefined || email === null || email === "") {
                popup.innerHTML = '<p class="textos">Campo email Vazio</p>'
                container.classList.toggle("active")
            } else {
                popup.innerHTML = `<p class="textos">O ${email} informado não consta na nossa base de dados</p>`
                container.classList.toggle("active")
            }
        } else if (senha != "12345") {
            if (senha === undefined || senha === null || senha === "") {
                popup.innerHTML = '<p class="textos">Campo senha Vazio</p>'
                container.classList.toggle("active")
            } else {
                popup.innerHTML = `<p class="textos">A ${senha} não bate com o ${email}</p>`
                container.classList.toggle("active")
            }
        } else {
            popup.innerHTML = `<p class="textos">Campos vazios</p>`
            container.classList.toggle("active")
        }
    }
}
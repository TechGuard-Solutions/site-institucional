let i = 0;

function changeRegister() {
    var cadastroEmpresa = document.getElementById("cadastro-empresa");
    var cadastroTeste = document.getElementById("cadastro-teste");
    var botao_mudar = document.getElementById("botao_registro");

    botao_mudar.innerHTML = "Cadastrar empresa";

    cadastroTeste.style.transition = "opacity 0.5s ease, visibility 0.5s ease";
    cadastroTeste.style.opacity = "0";
    cadastroTeste.style.visibility = "hidden";

    setTimeout(function () {
        cadastroTeste.style.display = "none";
        cadastroEmpresa.style.display = "flex";

        setTimeout(function () {
            cadastroEmpresa.style.transition = "opacity 0.5s ease, visibility 0.5s ease";
            cadastroEmpresa.style.opacity = "1";
            cadastroEmpresa.style.visibility = "visible";
        }, 10); 
        setTimeout(function () {
            cadastroTeste.style.transition = "opacity 0.5s ease, visibility 0.5s ease";
            cadastroTeste.style.opacity = "1";
            cadastroTeste.style.visibility = "visible";
        }, 10);
    }, 500);

    i++;
}

function mandarParaTela() {
    if (i > 1) {
        window.location.href = "login.html";
    }
}
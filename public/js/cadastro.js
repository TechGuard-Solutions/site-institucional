let i = 0;

function changeRegister() {
    var p_cadastro = document.getElementById("texto-cadastro");
    var cadastroEmpresa = document.getElementById("cadastro-empresa");
    var cadastroTeste = document.getElementById("cadastro-teste");
    var botao_mudar = document.getElementById("botao_registro");

    botao_mudar.innerHTML = "Cadastrar empresa";
    cadastroTeste.style.transition = "opacity 0.5s ease, visibility 0.5s ease";
    cadastroEmpresa.style.transition = "opacity 0.5s ease, visibility 0.5s ease";

    cadastroTeste.style.opacity = "0";
    cadastroTeste.style.visibility = "hidden";
    cadastroTeste.style.display = "none";

    cadastroEmpresa.style.display = "flex";
    cadastroEmpresa.style.opacity = "1";
    cadastroEmpresa.style.visibility = "visible";

    i++;
}

function mandarParaTela() {
    if (i > 1) {
        window.location.href = "login.html";
    }
}

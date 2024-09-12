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

function cadastrarEmpresa() {
    var nome_empresa = nomeEmpresa.value;
    var email_empresa = emailCorporativo.value;
    var cep_empresa = cep.value;
    var cnpj_empresa = cnpj.value;
    var tel_empresa = telefoneEmpresa.value;

    fetch("/usuarios/cadastrarEmpresa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nomeEmpresaServer: nome_empresa,
            emailCorporativoServer: email_empresa,
            cepServer: cep_empresa,
            cnpjServer: cnpj_empresa,
            telEmpresaServer: tel_empresa
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                res.status(200).send("Empresa cadastrada com sucesso");
                alert('Empresa Cadastrada');
                    mandarParaTela();

            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;

}
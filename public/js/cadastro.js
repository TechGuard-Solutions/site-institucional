function changeRegister() {
    var cadastroEmpresa = document.getElementById("cadastro-empresa");
    var cadastroTeste = document.getElementById("cadastro-teste");

    var nome_usuario = nomeUsuario.value;
    var email_usuario = emailUsuario.value;
    var cpf_usuario = cpfUsuario.value;
    var tel_usuario = telUsuario.value
    var senha_usuario = senhaUsuario.value;
    var confirmarsenha_usuario = confirmarSenhaUsuario.value;
    var arroba = email_usuario.indexOf('@');
    var ponto = email_usuario.indexOf('.');

    if (nome_usuario.length < 2) {
        alert("Nome muito curto!");
    } else if (arroba == -1 || ponto == -1) {
        alert("Email Inválido");
    } else if (cpf_usuario.length < 11) {
        alert("CPF inválido");
    } else if (tel_usuario.length < 11) {
        alert("Número de celular inválido");
    } else if (senha_usuario.length < 8) {
        alert("Senha muito fraca!");
    } else if (!(/[.*@#]/.test(senha_usuario))) {
        alert("Senha deve conter pelo menos um dos seguintes caracteres especiais: . * @ #");
    } else if (confirmarsenha_usuario != senha_usuario) {
        alert("Senhas não correspondem!");
    } else {
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
    }
}

function mandarParaTela() {
    setTimeout(window.location.href = "login.html", 2000);
}

//Funções de cadastro

function cadastrarUsuario() {
    var nome_usuario = nomeUsuario.value;
    var email_usuario = emailUsuario.value;
    var cpf_usuario = cpfUsuario.value;
    var tel_usuario = telUsuario.value
    var senha_usuario = senhaUsuario.value;
    var confirmarsenha_usuario = confirmarSenhaUsuario.value;
    var tipo_usuario = 2;
    var fk_empresa = sessionStorage.idEmpresa;

    var arroba = email_usuario.indexOf('@');
    var ponto = email_usuario.indexOf('.');

    if (nome_usuario.length < 2) {
        alert("Nome muito curto!");
    } else if (arroba == -1 || ponto == -1) {
        alert("Email Inválido");
    } else if (cpf_usuario.length < 11) {
        alert("CPF inválido");
    } else if (tel_usuario.length < 11) {
        alert("Número de celular inválido");
    } else if (senha_usuario.length < 8) {
        alert("Senha muito fraca!");
    } else if (!(/[.*@#]/.test(senha_usuario))) {
        alert("Senha deve conter pelo menos um dos seguintes caracteres especiais: . * @ #");
    } else if (confirmarsenha_usuario != senha_usuario) {
        alert("Senhas não correspondem!");
    } else {
        fetch("/usuarios/cadastrarUsuario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nomeUsuarioServer: nome_usuario,
                emailUsuarioServer: email_usuario,
                cpfServer: cpf_usuario,
                telUsuarioServer: tel_usuario,
                senhaUsuarioServer: senha_usuario,
                tipoUsuarioServer: tipo_usuario,
                fkEmpresaServer: fk_empresa
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    alert('Usuario Cadastrado');
                    mandarParaTela();
                } else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (erro) {
                console.log(`#ERRO: ${erro}`);
            });
        return false;

    }

}

function cadastrarEmpresa() {
    var nome_empresa = nomeEmpresa.value;
    var email_empresa = emailCorporativo.value;
    var cep_empresa = cep.value;
    var cnpj_empresa = cnpj.value;
    var tel_empresa = telefoneEmpresa.value;

    var arroba = email_empresa.indexOf('@');
    var ponto = email_empresa.indexOf('.');

    if (nome_empresa < 3) {
        alert("Nome da empresa muito curto!");
        console.log(nome_empresa);
    } else if (arroba == -1 || ponto == -1) {
        alert("Email Inválido!");
        console.log(email_empresa);
    } else if (cep_empresa.length < 9) {
        alert("CEP Inválido! Por favor verifique novamente");
        console.log(cep_empresa);
    } else if (tel_empresa < 8) {
        alert("Telefone Inválido");
    } else if (cnpj_empresa.length < 18) {
        alert("CNPJ Inválido!");
        console.log(cnpj_empresa);
    } else {
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
                    alert('Empresa Cadastrada');
                    console.log("cnpj fetch empresa: " + cnpj_empresa)
                    identificarEmpresa(cnpj_empresa);
                } else {
                    throw "Houve um erro ao tentar realizar o cadastro da empresa!";
                }
            })
            .catch(function (erro) {
                console.log(`#ERRO: ${erro}`);
            });

        return false;
    }

}

function identificarEmpresa(cnpj) {
    fetch("/usuarios/identificarEmpresa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ cnpj: cnpj })
    })
        .then(function (resposta) {
            console.log("empresa identificada: ", resposta);

            if (resposta.ok) {
                resposta.json().then(json => {
                    console.log(json[0].idEmpresa);
                    sessionStorage.idEmpresa = json[0].idEmpresa;
                    cadastrarUsuario();
                });
            }
        })
        .catch(function (erro) {
            console.log(`#ERRO: ${erro}`);
        });

    return false;
}
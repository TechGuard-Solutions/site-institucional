function autenticar() {
    let email = campoEmail.value;
    let senha = campoSenha.value;

    if (email == undefined || senha == undefined) {
        alert("Campos preenchidos incorretamente!");
    } else {
        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                emailUsuarioServer: email,
                senhaUsuarioServer: senha
            }),
        })
            .then(function (resposta) {
                console.log(resposta);

                if (resposta.ok) {
                    console.log("Usuário autenticado com sucesso!")
                    resposta.json().then(json => {
                        console.log("Resposta JSON:", json);
                            sessionStorage.idUsuario = json.idUsuario;
                            sessionStorage.nomeUsuario = json.nomeUsuario;
                            sessionStorage.emailUsuario = json.emailUsuario;
                            sessionStorage.fkEmpresa = json.fkEmpresa;
                            sessionStorage.nomeEmpresa = json.nomeEmpresa;

                            alert("Usuário autenticado!");
                            setTimeout(() => {
                                window.location.href = "../dashboard.html";
                            }, 1000);
                    });
                } else {
                    console.log("Houve um erro ao tentar realizar a autenticação!")
                    throw "Houve um erro ao tentar realizar a autenticação!";
                }
            })
            .catch(function (erro) {
                console.log(`#ERRO: ${erro}`);
            });
        return false;
    }
}
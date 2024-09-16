function autenticar() {
    let email = campoEmail.value;
    console.log("🚀 ~ autenticar ~ email:", email)
    let senha = campoSenha.value;
    console.log("🚀 ~ autenticar ~ senha:", senha)

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
                    resposta.json().then(json => {
                        console.log("Resposta JSON:", json);
                            sessionStorage.idUsuario = json.idUsuario;
                            sessionStorage.nomeUsuario = json.nomeUsuario;
                            sessionStorage.emailUsuario = json.emailUsuario;
                            sessionStorage.fkEmpresa = json.fkEmpresa;
                            alert("Usuário autenticado!");
                    });
                } else {
                    throw "Houve um erro ao tentar realizar a autenticação!";
                }
            })
            .catch(function (erro) {
                console.log(`#ERRO: ${erro}`);
            });
        return false;
    }
}
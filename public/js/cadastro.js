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
        Swal.fire({
            title: "Nome do usuário deve conter mais de 2 caracteres!",
            icon: "error",
            color: "#f4796b",
            background: "#10161c",
            confirmButtonColor: "#10161c",
            customClass: {
                confirmButton: 'meu-botao',
                popup: 'meu-alerta',
                icon: 'meu-icone'
            }
        });
    } else if (arroba == -1 || ponto == -1) {
        Swal.fire({
            title: "Email inválido!",
            icon: "error",
            color: "#f4796b",
            background: "#10161c",
            confirmButtonColor: "#10161c",
            customClass: {
                confirmButton: 'meu-botao',
                popup: 'meu-alerta',
                icon: 'meu-icone'
            }
        });
    } else if (cpf_usuario.length < 11) {
        Swal.fire({
            title: "CPF inválido!",
            icon: "error",
            color: "#f4796b",
            background: "#10161c",
            confirmButtonColor: "#10161c",
            customClass: {
                confirmButton: 'meu-botao',
                popup: 'meu-alerta',
                icon: 'meu-icone'
            }
        });
    } else if (tel_usuario.length < 11) {
        Swal.fire({
            title: "Número de celular inválido!",
            icon: "error",
            color: "#f4796b",
            background: "#10161c",
            confirmButtonColor: "#10161c",
            customClass: {
                confirmButton: 'meu-botao',
                popup: 'meu-alerta',
                icon: 'meu-icone'
            }
        });
    } else if (senha_usuario.length < 8) {
        Swal.fire({
            title: "Senha deve conter mais de 8 dígitos!",
            icon: "error",
            color: "#f4796b",
            background: "#10161c",
            confirmButtonColor: "#10161c",
            customClass: {
                confirmButton: 'meu-botao',
                popup: 'meu-alerta',
                icon: 'meu-icone'
            }
        });
    } else if (!(/[.*@#]/.test(senha_usuario))) {
        Swal.fire({
            title: "Senha deve conter pelo menos um desses caracteres especiais: '.', '*', '@', '#'",
            icon: "error",
            color: "#f4796b",
            background: "#10161c",
            confirmButtonColor: "#10161c",
            customClass: {
                confirmButton: 'meu-botao',
                popup: 'meu-alerta',
                icon: 'meu-icone'
            }
        });
    } else if (confirmarsenha_usuario != senha_usuario) {
        Swal.fire({
            title: "Senhas não correspondem!",
            icon: "error",
            color: "#f4796b",
            background: "#10161c",
            confirmButtonColor: "#10161c",
            customClass: {
                confirmButton: 'meu-botao',
                popup: 'meu-alerta',
                icon: 'meu-icone'
            }
        });
    } else {
        Swal.fire({
            title: "Agora cadastre a empresa!",
            color: "#4ADC7C",
            background: "#10161c",
            confirmButtonColor: "#10161c",
            customClass: {
                confirmButton: 'meu-botao',
                popup: 'meu-alerta',
                icon: 'meu-icone'
            },
            html: "Redirecionando...",
            timer: 1500,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });

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
        Swal.fire({
            title: "Nome do usuário deve conter mais de 2 carácteres!",
            icon: "error",
            color: "#f4796b",
            background: "#10161c",
            confirmButtonColor: "#10161c",
            customClass: {
                confirmButton: 'meu-botao',
                popup: 'meu-alerta',
                icon: 'meu-icone'
            }
        });
    } else if (arroba == -1 || ponto == -1) {
        Swal.fire({
            title: "Email inválido!",
            icon: "error",
            color: "#f4796b",
            background: "#10161c",
            confirmButtonColor: "#10161c",
            customClass: {
                confirmButton: 'meu-botao',
                popup: 'meu-alerta',
                icon: 'meu-icone'
            }
        });
    } else if (cpf_usuario.length < 11) {
        Swal.fire({
            title: "CPF inválido!",
            icon: "error",
            color: "#f4796b",
            background: "#10161c",
            confirmButtonColor: "#10161c",
            customClass: {
                confirmButton: 'meu-botao',
                popup: 'meu-alerta',
                icon: 'meu-icone'
            }
        });
    } else if (tel_usuario.length < 11) {
        Swal.fire({
            title: "Número de celular inválido!",
            icon: "error",
            color: "#f4796b",
            background: "#10161c",
            confirmButtonColor: "#10161c",
            customClass: {
                confirmButton: 'meu-botao',
                popup: 'meu-alerta',
                icon: 'meu-icone'
            }
        });
    } else if (senha_usuario.length < 8) {
        Swal.fire({
            title: "Senha deve conter mais de 8 dígitos!",
            icon: "error",
            color: "#f4796b",
            background: "#10161c",
            confirmButtonColor: "#10161c",
            customClass: {
                confirmButton: 'meu-botao',
                popup: 'meu-alerta',
                icon: 'meu-icone'
            }
        });
    } else if (!(/[.*@#]/.test(senha_usuario))) {
        Swal.fire({
            title: "Senha deve conter pelo menos um desses caracteres especiais: '.', '*', '@', '#'",
            icon: "error",
            color: "#f4796b",
            background: "#10161c",
            confirmButtonColor: "#10161c",
            customClass: {
                confirmButton: 'meu-botao',
                popup: 'meu-alerta',
                icon: 'meu-icone'
            }
        });
    } else if (confirmarsenha_usuario != senha_usuario) {
        Swal.fire({
            title: "Senhas não correspondem!",
            icon: "error",
            color: "#f4796b",
            background: "#10161c",
            confirmButtonColor: "#10161c",
            customClass: {
                confirmButton: 'meu-botao',
                popup: 'meu-alerta',
                icon: 'meu-icone'
            }
        });
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
                    console.log("Usuário cadastrado com sucesso!")
                    let timerInterval;
                    Swal.fire({
                        title: "Usuário cadastrado!",
                        html: "Redirecionando...",
                        color: "#4ADC7C",
                        background: "#10161c",
                        confirmButtonColor: "#10161c",
                        customClass: {
                            confirmButton: 'meu-botao',
                            popup: 'meu-alerta',
                            icon: 'meu-icone'
                        },
                        timer: 1500,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading();
                            const timer = Swal.getPopup().querySelector("b");
                            timerInterval = setInterval(() => {
                                timer.textContent = `${Swal.getTimerLeft()}`;
                            }, 100);
                        },
                        willClose: () => {
                            clearInterval(timerInterval);
                        }
                    })
                    mandarParaTela();
                } else {
                    Swal.fire({
                        title: "Houve um erro ao tentar realizar o cadastro, por favor, verifique os dados!",
                        icon: "error",
                        color: "#f4796b",
                        background: "#10161c",
                        confirmButtonColor: "#10161c",
                        customClass: {
                            confirmButton: 'meu-botao',
                            popup: 'meu-alerta',
                            icon: 'meu-icone'
                        }
                    });
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
        Swal.fire({
            title: "Nome da empresa deve conter mais de 3 caracteres!",
            icon: "error",
            color: "#f4796b",
            background: "#10161c",
            confirmButtonColor: "#10161c",
            customClass: {
                confirmButton: 'meu-botao',
                popup: 'meu-alerta',
                icon: 'meu-icone'
            }
        });
        console.log(nome_empresa);
    } else if (arroba == -1 || ponto == -1) {
        Swal.fire({
            title: "Email inválido!",
            icon: "error",
            color: "#f4796b",
            background: "#10161c",
            confirmButtonColor: "#10161c",
            customClass: {
                confirmButton: 'meu-botao',
                popup: 'meu-alerta',
                icon: 'meu-icone'
            }
        });
        console.log(email_empresa);
    } else if (cep_empresa.length < 9) {
        Swal.fire({
            title: "CEP inválido!",
            icon: "error",
            color: "#f4796b",
            background: "#10161c",
            confirmButtonColor: "#10161c",
            customClass: {
                confirmButton: 'meu-botao',
                popup: 'meu-alerta',
                icon: 'meu-icone'
            }
        });
        console.log(cep_empresa);
    } else if (tel_empresa < 8) {
        Swal.fire({
            title: "Telefone inválido!",
            icon: "error",
            color: "#f4796b",
            background: "#10161c",
            confirmButtonColor: "#10161c",
            customClass: {
                confirmButton: 'meu-botao',
                popup: 'meu-alerta',
                icon: 'meu-icone'
            }
        });
        console.log(tel_empresa);
    } else if (cnpj_empresa.length < 18) {
        Swal.fire({
            title: "CNPJ inválido!",
            icon: "error",
            color: "#f4796b",
            background: "#10161c",
            confirmButtonColor: "#10161c",
            customClass: {
                confirmButton: 'meu-botao',
                popup: 'meu-alerta',
                icon: 'meu-icone'
            }
        });
        console.log(cnpj_empresa);
    } else {
        // Chama a função de validação do CNPJ
        validarCNPJ(cnpj_empresa).then(isValid => {
            if (isValid) {
                // Se o CNPJ for válido, continua com o cadastro
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
                            Swal.fire({
                                title: "Empresa cadastrada com sucesso!",
                                html: "Redirecionando...",
                                color: "#4ADC7C",
                                background: "#10161c",
                                confirmButtonColor: "#10161c",
                                customClass: {
                                    confirmButton: 'meu-botao',
                                    popup: 'meu-alerta',
                                    icon: 'meu-icone'
                                },
                                timer: 1500,
                                timerProgressBar: true,
                                didOpen: () => {
                                    Swal.showLoading();
                                    const timer = Swal.getPopup().querySelector("b");
                                    timerInterval = setInterval(() => {
                                        timer.textContent = `${Swal.getTimerLeft()}`;
                                    }, 100);
                                },
                                willClose: () => {
                                    clearInterval(timerInterval);
                                }
                            })
                            mandarParaTela();

                            console.log("cnpj fetch empresa: " + cnpj_empresa)
                            identificarEmpresa(cnpj_empresa);
                        } else {
                            Swal.fire({
                                title: "Houve um erro ao tentar realizar o cadastro, por favor, verifique os dados!",
                                icon: "error",
                                color: "#f4796b",
                                background: "#10161c",
                                confirmButtonColor: "#10161c",
                                customClass: {
                                    confirmButton: 'meu-botao',
                                    popup: 'meu-alerta',
                                    icon: 'meu-icone'
                                }
                            });
                        }
                    })
                    .catch(function (erro) {
                        console.log(`#ERRO: ${erro}`);
                    });
            } else {
                Swal.fire({
                    title: "CNPJ inválido, por favor, verifique os dados!",
                    icon: "error",
                    color: "#f4796b",
                    background: "#10161c",
                    confirmButtonColor: "#10161c",
                    customClass: {
                        confirmButton: 'meu-botao',
                        popup: 'meu-alerta',
                        icon: 'meu-icone'
                    }
                });
            }
        });
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
                console.log("Empresa identificada com sucesso")
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

function validarCNPJ(cnpj_empresa) {
    var cnpj_tratado = cnpj_empresa.replaceAll('.', '').replaceAll('/', '').replaceAll('-', '');

    return fetch(`https://open.cnpja.com/office/${cnpj_tratado}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // Se a API exigir um token de autenticação, adicione-o aqui
            // "Authorization": "Bearer SEU_TOKEN_AQUI"
        }
    })
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.json().then(json => {
                    console.log("CNPJ validado com sucesso", json);
                    return true; // CNPJ válido
                });
            } else {
                console.log("CNPJ inválido ou não encontrado");
                return false; // CNPJ inválido
            }
        })
        .catch(function (erro) {
            console.log(`#ERRO: ${erro}`);
            return false; // Em caso de erro, retorna inválido
        });
}

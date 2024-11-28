function adicionarUsuario() {
    var nome_usuario = nomeUsuario.value;
    var email_usuario = emailUsuario.value;
    var cpf_usuario = cpfUsuario.value;
    var tel_usuario = telUsuario.value;
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
            title: "Informações Salvas!",
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
                cadastrarUsuario();
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
    }
}
function mandarParaTela() {
    setTimeout(window.location.href = "administracaoUsuario.html", 2000);
}
//Funções de cadastro
function cadastrarUsuario() {
    var nome_usuario = nomeUsuario.value;
    var email_usuario = emailUsuario.value;
    var cpf_usuario = cpfUsuario.value;
    var tel_usuario = telUsuario.value
    var senha_usuario = senhaUsuario.value;
    var confirmarsenha_usuario = confirmarSenhaUsuario.value;
    var tipo_usuario = 1;
    var fk_empresa = sessionStorage.fkEmpresa;
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
                    console.log("Usuário cadastrado com sucesso!");
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
                    });
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
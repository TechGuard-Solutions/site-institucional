var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var emailUsuario = req.body.emailUsuarioServer;
    var senhaUsuario = req.body.senhaUsuarioServer;

    console.log("Email recebido:", emailUsuario);  // Log do email recebido
    console.log("Senha recebida:", senhaUsuario);  // Log da senha recebida

    if (emailUsuario == undefined) {
        res.status(400).send(console.log("Seu email está undefined!"));
    } else if (senhaUsuario == undefined) {
        res.status(400).send(console.log("Sua senha está indefinida!"));
    } else {
        usuarioModel.autenticar(emailUsuario, senhaUsuario)
            .then(function (resultadoAutenticar) {
                if (resultadoAutenticar.length == 1) {
                    res.json({
                        idUsuario: resultadoAutenticar[0].idUsuario,
                        nomeUsuario: resultadoAutenticar[0].nomeUsuario,
                        emailUsuario: resultadoAutenticar[0].emailUsuario,
                        fkEmpresa: resultadoAutenticar[0].fkEmpresa,
                        nomeEmpresa: resultadoAutenticar[0].nomeEmpresa,
                        fkTipoUsuario: resultadoAutenticar[0].fkTipoUsuario,
                        cargo: resultadoAutenticar[0].cargo
                    });
                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send(console.log("Email e/ou senha inválido(s)"));
                } else {
                    res.status(403).send(console.log("Mais de um usuário com o mesmo login e senha!"));
                }
            })
            .catch(function (erro) {
                console.log("Erro no login:", erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function cadastrarEmpresa(req, res) {
    var nomeEmpresa = req.body.nomeEmpresaServer;
    var cep = req.body.cepServer;
    var cnpj = req.body.cnpjServer;
    var emailCorporativo = req.body.emailCorporativoServer;
    var telEmpresa = req.body.telEmpresaServer;

    if (nomeEmpresa == undefined) {
        res.status(400).send(consoloe.log("Seu nome está undefined!"));
    } else if (emailCorporativo == undefined) {
        res.status(400).send(console.log("Seu email está undefined!"));
    } else if (cep == undefined) {
        res.status(400).send(console.log("Seu cep está undefined!"));
    } else if (cnpj == undefined) {
        res.status(400).send(console.log("Seu cnpj está undefined!"));
    } else if (telEmpresa == undefined) {
        res.status(400).send(console.log("Seu telEmpresa está undefined!"));
    } else {
        usuarioModel.cadastrarEmpresa(nomeEmpresa, cep, cnpj, emailCorporativo, telEmpresa)
            .then(function (resultado) {
                res.json(resultado);
                console.log(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function deletarUsuario(req, res) {
    const idUsuario = req.body.idUsuarioServer;
    if (!idUsuario) {
        return res.status(400).json({ message: "ID do usuário é necessário." });
    }
    usuarioModel.deletarUsuario(idUsuario)
        .then(function () {
            res.status(200).json({ message: "Usuário deletado com sucesso!" }); // Envia um JSON
        })
        .catch(function (erro) {
            console.error("Erro ao deletar usuário:", erro);
            res.status(500).json({ message: erro.sqlMessage || "Erro interno ao deletar o usuário." });
        });
}



function cadastrarUsuario(req, res) {
    var emailUsuario = req.body.emailUsuarioServer;
    var nomeUsuario = req.body.nomeUsuarioServer;
    var senhaUsuario = req.body.senhaUsuarioServer;
    var cpf = req.body.cpfServer;
    var telUsuario = req.body.telUsuarioServer;
    var tipoUsuario = req.body.tipoUsuarioServer
    var fkEmpresa = req.body.fkEmpresaServer;


    if (nomeUsuario == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (emailUsuario == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senhaUsuario == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu cpf está undefined!");
    } else if (telUsuario == undefined) {
        res.status(400).send("Seu telUsuario está undefined!");
    } else if (fkEmpresa == undefined) {
        res.status(400).send("Sua fkEmpresa está undefined!");
    } else {
        usuarioModel.cadastrarUsuario(nomeUsuario, senhaUsuario, cpf, emailUsuario, telUsuario, fkEmpresa, tipoUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function identificarEmpresa(req, res) {
    var cnpj = req.body.cnpj;

    usuarioModel.identificarEmpresa(cnpj)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao identificar o CNPJ da empresa! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json({ error: erro.sqlMessage });
        });
}

function listarUsuarios(req, res) {
    var fkEmpresa = req.body.fkEmpresaServer;
    usuarioModel.listarUsuarios(fkEmpresa).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum usuário encontrado!");
            }
        })
        .catch((erro) => {
            console.log(erro);
        res.status(500).json({ erro: erro.message });
        });
}

function confirmarEdicao(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var emailUsuario = req.body.emailUsuarioServer;
    var cargo = req.body.fkTipoUsuarioServer;
    console.log("informacoesEdicao: ", idUsuario, emailUsuario, cargo)
    usuarioModel.confirmarEdicao(idUsuario, emailUsuario, cargo)
        .then(function () {
            res.status(200).send("Usuário alterado com sucesso!");
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function identificarUsuario(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    usuarioModel.identificarUsuario(idUsuario)
    .then(function (resposta) {
        if (resposta && resposta.length > 0) {
            // Retorna os dados do usuário como JSON
            res.status(200).json(resposta[0]); 
        } else {
            // Caso o usuário não seja encontrado
            res.status(404).json({ mensagem: "Usuário não encontrado." });
        }
    })
    .catch(function (erro) {
        console.error("Erro ao identificar o usuário:", erro);
        res.status(500).json({ erro: erro.sqlMessage || "Erro no servidor." });
    });
}

function listarEmpresas(req, res) {
    usuarioModel.listarEmpresas().then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma Empresa encontrada!");
            }
        })
        .catch((erro) => {
            console.log(erro);
        res.status(500).json({ erro: erro.message });
        });
}

function desativarEmpresa(req, res) {
    const idEmpresa = req.body.idEmpresaServer;
    if (!idEmpresa) {
        return res.status(400).json({ message: "ID da Empresa é necessário." });
    }
    usuarioModel.desativarEmpresa(idEmpresa)
        .then(function () {
            res.status(200).json({ message: "Empresa desativada com sucesso!" }); // Envia um JSON
        })
        .catch(function (erro) {
            console.error("Erro ao desativar Empresa:", erro);
            res.status(500).json({ message: erro.sqlMessage || "Erro interno ao desativar o Empresa." });
        });
}

function ativarEmpresa(req, res) {
    const idEmpresa = req.body.idEmpresaServer;
    if (!idEmpresa) {
        return res.status(400).json({ message: "ID da Empresa é necessário." });
    }
    usuarioModel.ativarEmpresa(idEmpresa)
        .then(function () {
            res.status(200).json({ message: "Empresa ativar com sucesso!" }); // Envia um JSON
        })
        .catch(function (erro) {
            console.error("Erro ao ativar Empresa:", erro);
            res.status(500).json({ message: erro.sqlMessage || "Erro interno ao ativar o Empresa." });
        });
}

function identificarEmpresas(req, res) {
    var idEmpresa = req.body.idEmpresaServer;

    usuarioModel.identificarEmpresas(idEmpresa)
    .then(function (resposta) {
        if (resposta && resposta.length > 0) {
            res.status(200).json(resposta); 
        } else {
            res.status(404).json({ mensagem: "Empresa não encontrada." });
        }
    })
    .catch(function (erro) {
        console.error("Erro ao identificar a empresa:", erro);
        res.status(500).json({ erro: erro.sqlMessage || "Erro no servidor." });
    });
}

function confirmarEdicaoEmpresa(req, res) {
    var idEmpresa = req.body.idEmpresaServer
    var nomeEmpresa = req.body.nomeEmpresaServer
    var cepEmpresa = req.body.cepEmpresaServer
    var cnpjEmpresa = req.body.cnpjEmpresaServer
    var emailEmpresa = req.body.emailEmpresaServer
    var telEmpresa = req.body.telEmpresaServer
    console.log("informacoesEdicao: ", idEmpresa, nomeEmpresa, cepEmpresa, cnpjEmpresa, emailEmpresa, telEmpresa)
    usuarioModel.confirmarEdicaoEmpresa(idEmpresa, nomeEmpresa, cepEmpresa, cnpjEmpresa, emailEmpresa, telEmpresa)
        .then(function () {
            res.status(200).send("Empresa alterada com sucesso!");
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    autenticar,
    cadastrarEmpresa,
    cadastrarUsuario,
    identificarEmpresa,
    listarUsuarios,
    confirmarEdicao,
    deletarUsuario,
    identificarUsuario,
    listarEmpresas,
    identificarEmpresas,
    confirmarEdicaoEmpresa,
    desativarEmpresa,
    ativarEmpresa
}
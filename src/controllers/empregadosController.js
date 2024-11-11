var usuarioModel = require("../models/empregadosModel");

function cadastrarEmpregado(req, res) {
    var nomeEmpregado = req.body.nomeEmpresaServer;
    var cep = req.body.cepServer;

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


function alterarEmpregado(req, res) {
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

function removerEmpregado(req, res) {
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

function listarEmpregados(req, res) {
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

module.exports = {
    alterarEmpregado,
    listarEmpregados,
    removerEmpregado,
    cadastrarEmpregado
}
var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var emailUsuario = req.body.emailUsuarioServer;
    var senhaUsuario = req.body.senhaUsuarioServer;

    if (emailUsuario == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senhaUsuario == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(emailUsuario, senhaUsuario)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        usuarioModel.autenticar(resultadoAutenticar[0].idEmpresa)
                            .then((resultadoUsuario) => {
                                if (resultadoUsuario.length > 0) {
                                    res.json({
                                        idUsuario: resultadoAutenticar[0].idUsuario,
                                        emailUsuario: resultadoAutenticar[0].emailUsuario,
                                        nomeUsuario: resultadoAutenticar[0].nomeUsuario,
                                        senhaUsuario: resultadoAutenticar[0].senhaUsuario
                                    });
                                } else {
                                    res.status(204).json({ aquarios: [] });
                                }
                            })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrarEmpresa(req, res) {
    var nomeEmpresa = req.body.nomeEmpresaServer;
    var cep = req.body.cepServer;
    var cnpj = req.body.cnpjServer;
    var emailCorporativo = req.body.emailCorporativoServer; // Corrigido
    var telEmpresa = req.body.telEmpresaServer;

    if (nomeEmpresa == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (emailCorporativo == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else if (telEmpresa == undefined) {
        res.status(400).send("Seu telEmpresa está undefined!");
    } else {
        usuarioModel.cadastrarEmpresa(nomeEmpresa, cep, cnpj, emailCorporativo, telEmpresa)
            .then(function (resultado) {
                res.json(resultado);
                console.log(resultado);
                identificarEmpresa(cnpj)
                    .then(function(resultadoEmpresa) {
                        console.log("Empresa identificada:", resultadoEmpresa);
                        // Aqui você pode fazer algo com o resultado
                    })
                    .catch(function (erro) {
                        console.log("Erro ao identificar empresa:", erro);
                    });
                // cadastrarUsuario();
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}


function cadastrarUsuario(req, res) {
    var emailUsuario = req.body.emailUsuarioServer;
    var nomeUsuario = req.body.nomeUsuarioServer;
    var senhaUsuario = req.body.senhaUsuarioServer;
    var cpf = req.body.cpfServer;
    var telUsuario = req.body.telUsuarioServer;
    var fkEmpresa = sessionStorage.fkEmpresa;


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
        usuarioModel.cadastrarUsuario(nomeUsuario, emailUsuario, senhaUsuario, cpf, telUsuario, fkEmpresa)
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
    var cnpj = req.body.cnpj; // Ou outra forma de obter o cnpj de req

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
    autenticar,
    cadastrarEmpresa,
    cadastrarUsuario,
    identificarEmpresa
}
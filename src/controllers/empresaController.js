var empresaModel = require("../models/empresaModel");

function cadastrarEmpresa(req, res) {
    var nomeEmpresa = req.body.nomeEmpresaServer;
    var cep = req.body.cepServer;
    var cnpj = req.body.cnpjServer;
    var emailCorporativo = req.body.emailCorporativoServer;
    var telEmpresa = req.body.telEmpresaServer;
    var segmento = req.body.segmentoServer;

    if (nomeEmpresa == undefined) {
        res.status(400).send("Nome da empresa está undefined!");
    } else if (emailCorporativo == undefined) {
        res.status(400).send("Email corporativo está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("CEP está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("CNPJ está undefined!");
    } else if (telEmpresa == undefined) {
        res.status(400).send("Telefone está undefined!");
    } else if (segmento == undefined) {
        res.status(400).send("Segmento está undefined!");
    } else {
        empresaModel.cadastrarEmpresa(nomeEmpresa, cep, cnpj, emailCorporativo, telEmpresa, segmento)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function listarEmpresas(req, res) {
    empresaModel.listarEmpresas()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma empresa encontrada!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json({ erro: erro.message });
        });
}

function buscarEmpresaPorId(req, res) {
    var idEmpresa = req.params.idEmpresa;

    empresaModel.buscarEmpresaPorId(idEmpresa)
        .then(function (resposta) {
            if (resposta && resposta.length > 0) {
                res.status(200).json(resposta[0]);
            } else {
                res.status(404).json({ mensagem: "Empresa não encontrada." });
            }
        })
        .catch(function (erro) {
            console.error("Erro ao buscar empresa:", erro);
            res.status(500).json({ erro: erro.sqlMessage || "Erro no servidor." });
        });
}

function atualizarEmpresa(req, res) {
    var idEmpresa = req.params.idEmpresa;
    var nomeEmpresa = req.body.nomeEmpresaServer;
    var emailCorporativo = req.body.emailCorporativoServer;
    var telEmpresa = req.body.telEmpresaServer;
    var cep = req.body.cepServer;
    var segmento = req.body.segmentoServer;

    empresaModel.atualizarEmpresa(idEmpresa, nomeEmpresa, emailCorporativo, telEmpresa, cep, segmento)
        .then(function () {
            res.status(200).json({ message: "Empresa atualizada com sucesso!" });
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function deletarEmpresa(req, res) {
    const idEmpresa = req.params.idEmpresa;
    
    if (!idEmpresa) {
        return res.status(400).json({ message: "ID da empresa é necessário." });
    }

    empresaModel.deletarEmpresa(idEmpresa)
        .then(function () {
            res.status(200).json({ message: "Empresa deletada com sucesso!" });
        })
        .catch(function (erro) {
            console.error("Erro ao deletar empresa:", erro);
            res.status(500).json({ message: erro.sqlMessage || "Erro interno ao deletar a empresa." });
        });
}

function buscarEmpresaPorCNPJ(req, res) {
    var cnpj = req.body.cnpjServer;

    empresaModel.buscarEmpresaPorCNPJ(cnpj)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao buscar o CNPJ da empresa! Erro: ", erro.sqlMessage);
            res.status(500).json({ error: erro.sqlMessage });
        });
}

module.exports = {
    cadastrarEmpresa,
    listarEmpresas,
    buscarEmpresaPorId,
    atualizarEmpresa,
    deletarEmpresa,
    buscarEmpresaPorCNPJ
}
var dashboardModel = require("../models/dashboardModel");

function obterDados(req, res) {
    dashboardModel.obterDados()
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao obter os dados de registro! CONTROLLER Erro: ",
                erro.sqlMessage
            );
            res.status(500).json({ error: erro.sqlMessage });
        });
}

module.exports = {
    obterDados,
}
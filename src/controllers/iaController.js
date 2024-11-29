var iaModel = require("../models/iaModel");

function obterDados(req, res) {
    iaModel.obterDados()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json({ erro: "Erro ao obter dados" });
        });
}
module.exports = {
    obterDados,
};
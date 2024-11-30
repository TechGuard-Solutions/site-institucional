var respostaModel = require("../models/respostaModel");

function obterRespostas(req, res) { 
    respostaModel.obterRespostas()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json({ erro: "Erro ao obter dados" });
        });
}
module.exports = {
    obterRespostas,
};
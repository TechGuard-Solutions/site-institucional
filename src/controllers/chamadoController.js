const chamadoModel = require('../models/chamadoModel');

const criarChamado = (req, res) => {
  const { descricao, prioridade, fk_usuario, tema, nome_usuario, email_usuario } = req.body;

  chamadoModel.cadastrarChamado(descricao, prioridade, fk_usuario, tema, nome_usuario, email_usuario)
    .then((novoChamado) => {
      res.status(201).json(novoChamado);
    })
    .catch((err) => {
      console.error("Erro ao criar chamado:", err);
      res.status(500).json({ error: "Erro ao criar chamado." });
    });
};

function listarChamados(req, res) {
  var fk_usuario = req.body.fk_usuario;
  chamadoModel.listarChamados(fk_usuario).then(function (resultado) {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).send("Nenhum chamado encontrado")
    }
    console.log("passei no controller")
  })
    .catch((erro) => {
      console.log(erro);
      res.status(500).json({ erro: erro.message });
    });
};


function deletarChamado(req, res) {
  var id = req.body.idServer;
  if (!id) {
    return res.status(400).json({ message: "ID do chamado é necessário." });
}
chamadoModel.deletarChamado(id)
    .then(function () {
        res.status(200).json({ message: "Chamado deletado com sucesso!" }); // Envia um JSON
    })
    .catch(function (erro) {
        console.error("Erro ao deletar chamado:", erro);
        res.status(500).json({ message: erro.sqlMessage || "Erro interno ao deletar o chamado." });
    });
}

module.exports = { criarChamado, listarChamados, deletarChamado };

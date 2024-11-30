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


const deletarChamado = (req, res) => {
  const { id } = req.body; 

  chamadoModel.deletarChamado(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao deletar chamado." });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Chamado não encontrado." });
    }
    res.status(200).json({ message: "Chamado deletado com sucesso." });
  });
};

module.exports = { criarChamado, listarChamados, deletarChamado };

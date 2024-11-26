const chamadoModel = require('../models/chamadoModel');

// Controlador para criar um chamado
const criarChamado = (req, res) => {
  const { nome, email, mensagem } = req.body;
  
  chamadoModel.criarChamado(nome, email, mensagem, (err, novoChamado) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao criar chamado." });
    }
    res.status(201).json(novoChamado);
  });
};

// Controlador para listar todos os chamados
const listarChamados = (req, res) => {
  chamadoModel.listarChamados((err, chamados) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao listar chamados." });
    }
    res.status(200).json(chamados);
    console.log("passei no controller")
  });
};

// Controlador para deletar um chamado
const deletarChamado = (req, res) => {
  const { id } = req.body; // Agora o id vem no corpo da requisição

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

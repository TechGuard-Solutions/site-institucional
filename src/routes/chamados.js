var express = require("express");
var chamadoController = require("../controllers/chamadoController");

var router = express.Router();

router.post("/criar", chamadoController.criarChamado);

router.get("/listar", chamadoController.listarChamados);

router.delete("/deletar/", chamadoController.deletarChamado);

module.exports = router;

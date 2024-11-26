var express = require("express");
var chamadoController = require("../controllers/chamadoController");

var router = express.Router();

router.post("/criar", function (req, res){
    chamadoController.criarChamado(req, res);
});

router.get("/listar", function (req, res){
    chamadoController.listarChamados(req, res);
});

router.post("/deletar", function (req, res){
    chamadoController.deletarChamado(req, res);
});

module.exports = router;

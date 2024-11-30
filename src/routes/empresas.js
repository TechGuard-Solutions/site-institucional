var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

// Rota para cadastrar uma nova empresa
router.post("/cadastrar", function (req, res) {
   empresaController.cadastrarEmpresa(req, res);
});

// Rota para listar todas as empresas
router.get("/listar", function (req, res) {
   empresaController.listarEmpresas(req, res);
});

// Rota para buscar uma empresa específica pelo ID
router.get("/buscar/:idEmpresa", function (req, res) {
   empresaController.buscarEmpresaPorId(req, res);
});

// Rota para buscar empresa por CNPJ
router.post("/buscar/cnpj", function (req, res) {
   empresaController.buscarEmpresaPorCNPJ(req, res);
});

// Rota para atualizar dados de uma empresa
router.put("/atualizar/:idEmpresa", function (req, res) {
   empresaController.atualizarEmpresa(req, res);
});

// Rota para deletar uma empresa
router.delete("/deletar/:idEmpresa", function (req, res) {
   empresaController.deletarEmpresa(req, res);
});

module.exports = router;
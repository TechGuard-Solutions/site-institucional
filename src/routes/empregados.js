var express = require("express");
var router = express.Router();

var empregadosController = require("../controllers/empregadosController");

router.post("/cadastrarEmpregado", function (req, res) {
    empregadosController.cadastrarEmpregado(req, res);
})

router.post("/alterarEmpregado", function (req, res) {
    empregadosController.alterarEmpregado(req, res);
})

router.post("/listarEmpregados", function (req, res) {
    empregadosController.listarEmpregados(req, res);
})

router.post("/removerEmpregado", function (req, res) {
    empregadosController.removerEmpregado(req, res);
});

module.exports = router;
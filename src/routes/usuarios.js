var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrarEmpresa", function (req, res) {
    usuarioController.cadastrarEmpresa(req, res);
})

router.post("/cadastrarUsuario", function (req, res) {
    usuarioController.cadastrarUsuario(req, res);
})

router.post("/identificarEmpresa", function (req, res) {
    usuarioController.identificarEmpresa(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/listarUsuarios", function (req, res){
    usuarioController.listarUsuarios(req, res);
});

router.put("/confirmarEdicao", function (req, res) {
    usuarioController.confirmarEdicao(req, res);
});

router.delete("/deletarUsuario", function (req, res) {
    usuarioController.deletarUsuario(req, res);
});

router.post("/identificarUsuario", function (req, res) {
    usuarioController.identificarUsuario(req, res);
});

router.get("/listarEmpresas", function (req, res){
    usuarioController.listarEmpresas(req, res);
});

router.put("/desativarEmpresa", function (req, res) {
    usuarioController.desativarEmpresa(req, res);
});

router.put("/ativarEmpresa", function (req, res) {
    usuarioController.ativarEmpresa(req, res);
});

router.post("/identificarEmpresas", function (req, res) {
    usuarioController.identificarEmpresas(req, res);
});

router.put("/confirmarEdicaoEmpresa", function (req, res) {
    usuarioController.confirmarEdicaoEmpresa(req, res);
});

module.exports = router;
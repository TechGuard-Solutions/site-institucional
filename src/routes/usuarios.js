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

router.get("/listarUsuarios", function (req, res){
    usuarioController.listarUsuarios(req, res);
});

router.put("/editarUsuario", function (req, res) {
    usuarioController.editarUsuario(req, res);
});

router.delete("/deletarUsuario/:idUsuario", function (req, res) {
    usuarioController.deletarUsuario(req, res);
});


module.exports = router;
var express = require("express");
var router = express.Router();

var respostaController = require("../controllers/respostaController");

router.get("/obterDados", function (req, res) {
    respostaController.obterDados(req, res);
})

module.exports = router;
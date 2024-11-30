var express = require("express");
var router = express.Router();

var respostaController = require("../controllers/respostaController");

router.get("/obterRespostas", function (req, res) {
    respostaController.obterRespostas(req, res);
})

module.exports = router;
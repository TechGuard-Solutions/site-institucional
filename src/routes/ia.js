var express = require("express");
var router = express.Router();

var iaController = require("../controllers/iaController");

router.get("/obterDados", function (req, res) {
    iaController.obterDados(req, res);
})

module.exports = router;
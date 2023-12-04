var express = require("express");
var router = express.Router();

var interController = require("../controllers/medidaController");


router.get("/ultimas/:idUsuario", function (req, res) {
    interController.analistInternacional(req, res);
});


router.get("/ultimas", function (req, res) {
    interController.rankedInter(req, res);
});


module.exports = router;
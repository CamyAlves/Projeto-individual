var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/pontuacao", function (req, res) {
    usuarioController.pontuacao(req, res);
});

router.post("/partida", function (req, res) {
    usuarioController.partida(req, res);
});

router.get("/ultimas/:idUsuario", function (req, res) {
    usuarioController.analistNacional(req, res);
});

router.get("/ultimas/:idUsuario", function (req, res) {
    usuarioController.analistInternacional(req, res);
});

module.exports = router;

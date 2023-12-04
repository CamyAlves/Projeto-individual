var medidaModel = require("../models/medidaModel");



function analistInternacional(req, res) {

    var idUsuario = req.params.idUsuario;

    medidaModel.analistInternacional(idUsuario).then(function (resultado) {
        if (resultado.ok) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function rankedInter(req, res) {
    medidaModel.rankedInter().then(function (resultado) {
        if (resultado.length> 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



module.exports = {
    rankedInter,
    analistInternacional
}
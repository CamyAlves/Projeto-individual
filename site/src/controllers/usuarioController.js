var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        /*aquarioModel.buscarAquariosPorEmpresa(resultadoAutenticar[0].empresaId)
                            .then((resultadoAquarios) => {
                                if (resultadoAquarios.length > 0) {*/
                        res.json({
                            idUsuario: resultadoAutenticar[0].idUsuario,
                            email: resultadoAutenticar[0].email,
                            nome: resultadoAutenticar[0].nome,
                            senha: resultadoAutenticar[0].senha
                        });
                        /*} else {
                            res.status(204).json({ aquarios: [] });
                        }*/
                        /*});*/
                    }

                    if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function pontuacao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var mpb = req.body.mpbServer;
    var rap = req.body.rapServer;
    var pop = req.body.popServer;
    var funk = req.body.funkServer;
    var rock = req.body.rockServer;
    var forro = req.body.forroServer;
    var pagode = req.body.pagodeServer;
    var sertanejo = req.body.sertanejoServer;
    var rEb = req.body.rEbServer;
    var hiphop = req.body.hiphopServer;
    var kpop = req.body.kpopServer;
    var pontuacaoTotal =req.body.pontuacaoTotalServer

    // Faça as validações dos valores
    if (mpb == undefined) {
        res.status(400).send("Seu mpb está undefined!");
    } else if (rap == undefined) {
        res.status(400).send("Seu rap está undefined!");
    } else if (pop == undefined) {
        res.status(400).send("Sua pop está undefined!");
    } else if (funk == undefined) {
        res.status(400).send("Sua funk está undefined!");
    } else if (rock == undefined) {
        res.status(400).send("Sua rock está undefined!");
    } else if (forro == undefined) {
        res.status(400).send("Sua forro está undefined!");
    } else if (pagode == undefined) {
        res.status(400).send("Sua pagode está undefined!");
    } else if (sertanejo == undefined) {
        res.status(400).send("Sua sertanejo está undefined!");
    }else if(pontuacaoTotal == undefined){
        res.status(400).send("Sua pontuacaoTotal está undefined!");
    }

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.pontuacao(mpb, rap, pop, funk, rock, forro, pagode, sertanejo, rEb, hiphop, kpop, pontuacaoTotal)
        .then(
            function (resultado) {
                var idPonto = resultado.insertId;
                res.json({ idPonto: idPonto });
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a pontuaçao! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function partida(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var temaPartida = req.body.temaPartidaServer;
    var fkPonto = req.body.fkPontoServer;
    var fkUsuario = req.body.fkUsuarioServer;

    console.log("temaPartida:", temaPartida);
    console.log("fkPonto:", fkPonto);
    console.log("fkUsuario:", fkUsuario);
    // Faça as validações dos valores
    if (temaPartida == undefined) {
        res.status(400).send("O tema da partida está undefined!");
    } else if (fkPonto == undefined) {
        res.status(400).send("A fkPonto está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("A fkPonto está undefined!");
    }
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js

    if (fkUsuario === undefined) {
        res.status(400).send("A fkUsuario está undefined!");
        return; // Adicione essa linha para sair da função aqui, pois não faz sentido prosseguir se fkUsuario não estiver definido.
    }

    usuarioModel.partida(temaPartida, fkPonto, fkUsuario)

        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a pontuaçao! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function analistNacional(req, res) {

    var idUsuario = req.params.idUsuario;

    usuarioModel.analistNacional(idUsuario).then(function (resultado) {
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



function ranked(req, res) {
    usuarioModel.ranked().then(function (resultado) {
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
    autenticar,
    cadastrar,
    pontuacao,
    partida,
    analistNacional,
    ranked
}

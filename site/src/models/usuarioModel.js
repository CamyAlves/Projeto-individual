var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT idUsuario, nome, email, dataNasc FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha, dataNasc) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, dataNasc);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha, dataNasc) VALUES ('${nome}', '${email}', '${senha}', '${dataNasc}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pontuacao(mpb, rap, pop, funk, rock, forro, pagode, sertanejo, rEb, hiphop, kpop, pontuacaoTotal) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pontuacao():", mpb, rap, pop, funk, rock, forro, pagode, sertanejo, rEb, hiphop, kpop, pontuacaoTotal);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO ponto (mpb, rap, pop, funk, rock, forro, pagode, sertanejo, rEb, hiphop, kpop, pontuacaoTotal) VALUES ('${mpb}', '${rap}', '${pop}', '${funk}', '${rock}', '${forro}', '${pagode}', '${sertanejo}', '${rEb}', '${hiphop}', '${kpop}', '${pontuacaoTotal}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function partida(temaPartida, fkPonto, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pontuacao():", temaPartida, fkPonto, fkUsuario);
    
    // Log para verificar o valor de fkPonto
    console.log("Valor de fkPonto:", fkPonto);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO partida (temaPartida, fkPonto, fkUsuario) VALUES ('${temaPartida}', '${fkPonto}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function analistNacional(idUsuario){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",)
    var instrucao = `
    select count(idPartida) as qntPartida, sum(pontuacaoTotal) as somaPonto, max(pontuacaoTotal) as melhorPonto from ponto join partida on idPonto = fkPonto join usuario on idUsuario = fkUsuario where temaPartida = 'nacional' and idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function analistInternacional(idUsuario){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",)
    var instrucao = `
    select count(idPartida) as qntPartida, sum(pontuacaoTotal) as somaPonto, max(pontuacaoTotal) as melhorPonto from ponto join partida on idPonto = fkPonto join usuario on idUsuario = fkUsuario where temaPartida = 'internacional' and idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}




module.exports = {
    autenticar,
    cadastrar,
    pontuacao,
    partida,
    analistNacional,
    analistInternacional
};

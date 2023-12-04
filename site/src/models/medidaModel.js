var database = require("../database/config");


function analistInternacional(idUsuario){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",)
    var instrucao = `
    select count(idPartida) as qntPartida, sum(pontuacaoTotal) as somaPonto, max(pontuacaoTotal) as melhorPonto, sum(rEb) as reb, sum(rap) as rap, sum(pop) as pop, sum(kpop) as kpop, sum(rock) as rock, sum(hiphop) as hiphop from ponto join partida on idPonto = fkPonto join usuario on idUsuario = fkUsuario where temaPartida = 'internacional' and idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function rankedInter(){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",)
    var instrucao = `
        select nome as nomeUsuarioi, temaPartida as temai, sum(pontuacaoTotal) as pontuacaoi, max(pontuacaoTotal) as pontuacaoMelhori from ponto 
	        join partida on idPonto = fkPonto 
		        join usuario on idUsuario = fkUsuario 
                    where temaPartida = 'internacional' 
			            group by nome, temaPartida
				            ORDER BY pontuacaoi, pontuacaoMelhori;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



module.exports = {
    analistInternacional,
    rankedInter
}

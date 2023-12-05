create database lifemusic;
use lifemusic;

create table usuario(
	idUsuario int primary key auto_increment,
    nome varchar(45),
    email varchar (60),
    senha varchar(20)
);

create table ponto (
	idPonto int primary key auto_increment,
    mpb int,
    rap int, 
    pop int, 
    funk int, 
    rock int, 
    forro int, 
    pagode int, 
    sertanejo int, 
    rEb int, 
    hiphop int, 
    kpop int,
    pontuacaoTotal int
)auto_increment= 1000;

create table partida(
	idPartida int auto_increment,
    temaPartida varchar(20),
    constraint chkTema check (temaPartida in ('internacional', 'nacional')),
    fkPonto int, 
	constraint FKPonto foreign key (fkPonto) references ponto(idPonto),
    fkUsuario int,
    constraint FKUsuario foreign key (fkUsuario) references usuario(idUsuario),
    primary key (idPartida, fkPonto, fkUsuario)
)auto_increment = 100;


-- insert
insert into usuario(nome, email, senha) values
	('Valeria', 'valeria@gmail.com', 'Valeria123.'),
    ('Paula', 'paula@gmail.com', 'Paula123.'),
    ('Maria', 'maria@gmail.com', 'Maria123.');
    
    
insert into ponto (mpb, rap, pop, funk, rock, forro, pagode, sertanejo, pontuacaoTotal) values
	(200, 1000, 2000, 400, 900, 290, 5000, 200, 70208),
    (200, 1000, 2000, 400, 900, 290, 5000, 200, 300);
    
insert into partida (fkPonto, fkUsuario, temaPartida) values
	(1093, 3, 'nacional'),
    (1094, 4, 'nacional');

-- select

select * from usuario;
select * from ponto;
select * from partida;

select ponto.* from usuario join partida on idUsuario = fkUsuario join ponto on idPonto = fkPonto;
 
 -- qnt de partidas nacionais jogada pelo usuario
select count(idPartida) from partida join usuario on idUsuario = fkUsuario where temaPartida = 'nacional';
select count(idPartida) from partida join usuario on idUsuario = fkUsuario where temaPartida = 'internacional';

-- soma dos pontos de todas as partidas 
select sum(pontuacaoTotal) from ponto join partida on idPonto = fkPonto where temaPartida = 'nacional';
select sum(pontuacaoTotal) from ponto join partida on idPonto = fkPonto where temaPartida = 'internacional';

-- maior pontuação de todas as partidas 
select max(pontuacaoTotal) from ponto join partida on idPonto = fkPonto where temaPartida = 'nacional';
select max(pontuacaoTotal) from ponto join partida on idPonto = fkPonto where temaPartida = 'internacional';


 -- ranked soma
select count(idPartida), sum(pontuacaoTotal), max(pontuacaoTotal) from ponto join partida on idPonto = fkPonto join usuario on idUsuario = fkUsuario where temaPartida = 'nacional' ;

select idUsuario as id, nome as nomeUsuario, temaPartida as tema, sum(pontuacaoTotal) as pontuacao from ponto 
	join partida on idPonto = fkPonto 
		join usuario on idUsuario = fkUsuario 
			where temaPartida = 'nacional' 
				group by idUsuario, nome, temaPartida
					ORDER BY pontuacao;
                    
select idUsuario as id, nome as nomeUsuario, temaPartida as tema, sum(pontuacaoTotal) as pontuacao from ponto 
	join partida on idPonto = fkPonto 
		join usuario on idUsuario = fkUsuario 
			where temaPartida = 'internacional' 
				group by idUsuario, nome, temaPartida
					ORDER BY pontuacao;
                
                
-- ranked melhor
  select nome as nomeUsuario, temaPartida as tema, sum(pontuacaoTotal) as pontuacao, max(pontuacaoTotal) as pontuacaoMelhor from ponto 
	        join partida on idPonto = fkPonto 
		        join usuario on idUsuario = fkUsuario 
                    where temaPartida = 'nacional' 
			            group by nome, temaPartida
				            ORDER BY pontuacao, pontuacaoMelhor;
            
select  nome as nomeUsuario, temaPartida as tema, max(pontuacaoTotal) as pontuacao from ponto 
	join partida on idPonto = fkPonto 
		join usuario on idUsuario = fkUsuario 
			where temaPartida = 'internacional' 
				group by nome, temaPartida
					ORDER BY pontuacao;
                    
-- select total de pontos por tema
select  sum(mpb) as mpb, sum(rap) as rap, sum(pop) as pop, sum(funk) as funk, sum(rock) as rock, sum(forro) as forro, sum(pagode) as pagode, sum(sertanejo) as serta from ponto
	join partida on idPonto = fkPonto 
		join usuario on idUsuario = fkUsuario 
			where temaPartida = 'nacional' and idUsuario=6;
            
select  sum(rEb) as reb, sum(rap) as rap, sum(pop) as pop, sum(kpop) as kpop, sum(rock) as rock, sum(hiphop) as hiphop from ponto
	join partida on idPonto = fkPonto 
		join usuario on idUsuario = fkUsuario 
			where temaPartida = 'internacional' and idUsuario=6;

                    
                    
select  mpb as mpb, rap as rap, pop as pop, funk as funk, rock as rock, forro as forro, pagode as pagode, sertanejo as serta, rEb as reb, kpop as kpop, hiphop as hiphop from ponto
	join partida on idPonto = fkPonto 
		join usuario on idUsuario = fkUsuario; 
        

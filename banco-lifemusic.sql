create database lifemusic;
use lifemusic;

create table usuario(
	idUsuario int primary key auto_increment,
    nome varchar(45),
    email varchar (60),
    senha varchar(20),
    dataNasc date
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


drop database lifemusic;

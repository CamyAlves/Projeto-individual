// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var pontoTotal = sessionStorage.PONTO_TOTAL;
    var mpb = sessionStorage.PONTO_MPB;
    var rap = sessionStorage.PONTO_RAP;
    var pop = sessionStorage.PONTO_POP;
    var funk = sessionStorage.PONTO_FUNK;
    var rock = sessionStorage.PONTO_ROCK;
    var forro = sessionStorage.PONTO_FORRO;
    var pagode = sessionStorage.PONTO_PAGODE;
    var sertanejo = sessionStorage.PONTO_SERTANEJO;


    var b_usuario = document.getElementById("b_usuario");
    var b_pontuacao = document.getElementById("b_pontuacao");
    var b_mpb = document.getElementById("b_mpb");
    var b_rap = document.getElementById("b_rap");
    var b_pop = document.getElementById("b_pop");
    var b_funk = document.getElementById("b_funk");
    var b_rock = document.getElementById("b_rock");
    var b_forro = document.getElementById("b_forro");
    var b_pagode = document.getElementById("b_pagode");
    var b_sertanejo = document.getElementById("b_sertanejo");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
        
        b_pontuacao.innerHTML = pontoTotal;
        b_mpb.innerHTML = mpb;
        b_rap.innerHTML = rap;
        b_pop.innerHTML = pop;
        b_funk.innerHTML = funk;
        b_rock.innerHTML = rock;
        b_forro.innerHTML = forro;
        b_pagode.innerHTML = pagode;
        b_sertanejo.innerHTML = sertanejo;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}


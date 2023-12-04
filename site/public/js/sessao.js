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
    var hiphop = sessionStorage.PONTO_HIPHOP;
    var kpop = sessionStorage.PONTO_KPOP;
    var reb = sessionStorage.PONTO_REB;

    var respostaCerta = sessionStorage.PONTO_RESPOSTA_CERTA;
    var respostaCertaMPB = sessionStorage.PONTO_RESPOSTA_CERTA_MPB;
    var respostaCertaPOP = sessionStorage.PONTO_RESPOSTA_CERTA_POP;
    var respostaCertaRAP = sessionStorage.PONTO_RESPOSTA_CERTA_RAP;
    var respostaCertaFUNK = sessionStorage.PONTO_RESPOSTA_CERTA_FUNK;
    var respostaCertaROCK = sessionStorage.PONTO_RESPOSTA_CERTA_ROCK;
    var respostaCertaFORRO = sessionStorage.PONTO_RESPOSTA_CERTA_FORRO;
    var respostaCertaPAGODE = sessionStorage.PONTO_RESPOSTA_CERTA_PAGODE;
    var respostaCertaSERTANEJO = sessionStorage.PONTO_RESPOSTA_CERTA_SERTANEJO;
    var perguntampb = sessionStorage.PERGUNTAS_MPB;
    var perguntapop = sessionStorage.PERGUNTAS_POP;
    var perguntarap = sessionStorage.PERGUNTAS_RAP;
    var perguntafunk = sessionStorage.PERGUNTAS_FUNK;
    var perguntarock = sessionStorage.PERGUNTAS_ROCK;
    var perguntaforro = sessionStorage.PERGUNTAS_FORRO; 
    var perguntapagode = sessionStorage.PERGUNTAS_PAGODE;
    var perguntasertanejo = sessionStorage.PERGUNTAS_SERTANEJO;


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
    var b_hiphop = document.getElementById("b_hiphop");
    var b_kpop = document.getElementById("b_kpop");
    var b_reb = document.getElementById("b_reb");


    var b_respostaCerta = document.getElementById("b_respostaCerta");
    var b_respostaCertaMPB = document.getElementById("b_respostaCertaMPB");
    var b_respostaCertaPOP = document.getElementById("b_respostaCertaPOP");
    var b_respostaCertaRAP = document.getElementById("b_respostaCertaRAP");
    var b_respostaCertaFUNK = document.getElementById("b_respostaCertaFUNK");
    var b_respostaCertaROCK = document.getElementById("b_respostaCertaROCK");
    var b_respostaCertaFORRO = document.getElementById("b_respostaCertaFORRO");
    var b_respostaCertaPAGODE = document.getElementById("b_respostaCertaPAGODE");
    var b_respostaCertaSERTANEJO = document.getElementById("b_respostaCertaSERTANEJO");
    var b_perguntampb = document.getElementById("b_perguntampb");
    var b_perguntapop = document.getElementById("b_perguntapop");
    var b_perguntarap = document.getElementById("b_perguntarap");
    var b_perguntafunk = document.getElementById("b_perguntafunk");
    var b_perguntarock = document.getElementById("b_perguntarock");
    var b_perguntaforro = document.getElementById("b_perguntaforro");
    var b_perguntapagode = document.getElementById("b_perguntapagode");
    var b_perguntasertanejo = document.getElementById("b_perguntasertanejo");


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
        b_hiphop.innerHTML = hiphop;
        b_kpop.innerHTML = kpop;
        b_reb.innerHTML = reb;

        b_respostaCerta.innerHTML = respostaCerta;
        b_respostaCertaMPB.innerHTML = respostaCertaMPB;
        b_respostaCertaPOP.innerHTML = respostaCertaPOP;
        b_respostaCertaRAP.innerHTML = respostaCertaRAP;
        b_respostaCertaFUNK.innerHTML = respostaCertaFUNK;
        b_respostaCertaROCK.innerHTML = respostaCertaROCK;
        b_respostaCertaFORRO.innerHTML = respostaCertaFORRO;
        b_respostaCertaPAGODE.innerHTML = respostaCertaPAGODE;
        b_respostaCertaSERTANEJO.innerHTML = respostaCertaSERTANEJO;

        b_perguntampb.innerHTML - perguntampb;
        b_perguntapop.innerHTML = perguntapop;
        b_perguntarap.innerHTML = perguntarap; 
        b_perguntafunk.innerHTML = perguntafunk;
        b_perguntarock.innerHTML = perguntarock;
        b_perguntaforro.innerHTML = perguntaforro;
        b_perguntapagode.innerHTML = perguntapagode;
        b_perguntasertanejo.innerHTML = perguntasertanejo;
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


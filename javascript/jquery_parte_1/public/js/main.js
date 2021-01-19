const tempoInicial = $("#tempo-digitacao").text();
const campoDigitacao = $(".campo-digitacao");

$(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    $("#botao-reiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#numero-palavras");
    tamanhoFrase.text(numPalavras);        
}

function inicializaContadores() {
    campoDigitacao.on("input", function () {
        var conteudo = campoDigitacao.val();
        
        var qtdeCaracteres = conteudo.length;
        var qtdePalavras = conteudo.split(/\S+/).length -1;
    
        $("#contador-caracteres").text(qtdeCaracteres);
        $("#contador-palavras").text(qtdePalavras);
    });        
}

function inicializaCronometro() {
    var tempoRestante = $("#tempo-digitacao").text();
    campoDigitacao.one("focus", function () {
        var cronometroId = setInterval(() => {
            tempoRestante --;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1){
                clearInterval(cronometroId);
                finalizaJogo();
            }
        }, 1000);
    });    
}

function finalizaJogo() {
    campoDigitacao.attr("disabled", true);
    campoDigitacao.toggleClass("campo-desabilitado");
    inserePlacar();
}

const frase = $(".frase").text();
campoDigitacao.on("input", function () {
    const valorDigitado = campoDigitacao.val();
    const estaIgual = frase.startsWith(valorDigitado);

    if (estaIgual) {
        campoDigitacao.addClass("borda-verde");
        campoDigitacao.removeClass("borda-vermelha");
    } else {
        campoDigitacao.removeClass("borda-verde");
        campoDigitacao.addClass("borda-vermelha");
    }""
});

function reiniciaJogo() {
    
    campoDigitacao.attr("disabled", false);
    campoDigitacao.val("");
    
    $("#tempo-digitacao").text(tempoInicial);
    $("#contador-caracteres").text("0");
    $("#contador-palavras").text("0");
    campoDigitacao.toggleClass("campo-desabilitado");
    campoDigitacao.removeClass("borda-verde");
    campoDigitacao.removeClass("borda-vermelha");
    inicializaCronometro();
}
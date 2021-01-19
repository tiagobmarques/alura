function inserePlacar() {
    const corpoTabela = $(".placar").find("tbody");
    const usuario = "Tiago";
    const numPalavras = $("#contador-palavras").text();
    
    const linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);
    corpoTabela.prepend(linha);
}

function novaLinha(usuario, palavras) {
    var linha = $("<tr>");
    const nomeUsuario = $("<td>").text(usuario);
    const numPalavras = $("<td>").text(palavras);
    const botaoRemover = $("<td>");

    const link = $("<a>").addClass("botao-remover").attr("href", "#");
    const icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);
    botaoRemover.append(link);
    linha.append(nomeUsuario);
    linha.append(numPalavras);
    linha.append(botaoRemover);

    return linha;
}

function removeLinha() {
    event.preventDefault();
    $(this).parent().parent().remove();
}

const negociacao = new NegociacaoController();
$('.form')
    .on('submit', negociacao.adiciona.bind(negociacao));

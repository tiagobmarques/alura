class NegociacaoController {
    constructor() {
        this._listaNegociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView("#tabela");
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacoesView.update(this._listaNegociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
        this._listaNegociacoes.adiciona(negociacao);
        // depois de adicionar, atualiza a view novamente para refletir os dados
        this._negociacoesView.update(this._listaNegociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso');
    }
}

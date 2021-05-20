class NegociacaoController {

    constructor(){
        this._data = $("#data");
        this._quantidade = $("#quantidade");
        this._valor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes();
        this._mensagem = new Mensagem();
        this._negociacoesView = new NegociacoesView($("#negociacoesView"));
        this._mensagemView = new MensagemView($("#mensagemView"));

        this._negociacoesView.update(this._listaNegociacoes);
    }

    adiciona (event) {
        event.preventDefault();

        //Aqui gera errado por o mes vai de 0 a 11
        //console.log(new Date(this._data.val()));
        //Aqui outro construtor é indocado
        //console.log(new Date(this._data.val().split("-")));
        //OUtra forma de fazer com o mesmo resultado da de cima.
        //console.log(new Date(this._data.val().replace(/-/g, ',')));
        //Uma forma mais complexa excplicando a funcionalidade do Map
        /*console.log("Complexa:" + new Date(...this._data
            .val()
            .split("-")
            .map((item, index) => {
                if (index == 1) {
                    return item -1;
                }

                return item;
            })));*/
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = "Negociação concluída com sucesso";
        
        this._negociacoesView.update(this._listaNegociacoes);
        this._mensagemView.update(this._mensagem);
        
        this._limpa();
    }

    _criaNegociacao() {
        return new Negociacao( DataHelper.textoParaData(this._data.val()),
                                        this._quantidade.val(),
                                        this._valor.val());
    }
    _limpa(){
        this._data.focus();
        this._data.val("");
        this._quantidade.val(1);
        this._valor.val(0.0);
    }
}
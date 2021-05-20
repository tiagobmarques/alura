class ListaNegociacoes {
    constructor() {
        this._negociacoes = [];
        
    }

    adiciona(negociacao){

        this._negociacoes.push(negociacao);
        
    }

    get Negociacoes() {
        return [].concat(this._negociacoes);//-- Programação defensiva, para evitar que outro elemento interaja com essa lista.
    }

    esvazia () {
        this._negociacoes = [];
        
    }
}
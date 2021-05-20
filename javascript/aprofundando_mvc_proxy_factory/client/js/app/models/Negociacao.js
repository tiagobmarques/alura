class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        // Com este freeze não irá permitir que alguem que chamou esta classe
        // consiga acessar  _valor e atribuir um valor
        Object.freeze(this);
    }

    // Este get permite que eu chame o metodo apenas como data ao inves de data()
    get data(){
        // Isso aqui serve para retornar uma nova instancia e não permitir q 
        // o valor seja modificado por quem chamou esse metodo
        return new Date(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume(){
        return this._quantidade * this._valor;
    }
}
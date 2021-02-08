abstract class View<T> {

    protected _tabela: JQuery;

    constructor(seletor: string) {

        this._tabela = $(seletor);
    }

    update(model: T) {
        this._tabela.html(this.template(model)); 
    }

    abstract template(model: T) : string;
}
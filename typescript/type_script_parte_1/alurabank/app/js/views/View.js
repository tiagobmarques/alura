class View {
    constructor(seletor) {
        this._tabela = $(seletor);
    }
    update(model) {
        this._tabela.html(this.template(model));
    }
}

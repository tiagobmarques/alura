class View {

    constructor (element) {
        this._element = element;
    }

    template(model) {
        throw new Error("Template method should be implemented");
    }

    update(model) {
        this._element.html(this.template(model));
    }
}
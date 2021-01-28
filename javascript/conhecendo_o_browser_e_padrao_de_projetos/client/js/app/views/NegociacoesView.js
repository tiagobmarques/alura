class NegociacoesView extends View{

    constructor (element) {
        super(element);
    }

    template(model) {
        return `<table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
                ${model
                    .negociacoes
                    .map((n) => `
                        
                        <tr>
                            <td>${DataHelper.dataParaText(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                    `).join('')}
            <tbody>

            </tbody>
            
            <tfoot>
                <td colspan="3"></td>
                <td colspan="3">
                    ${model.negociacoes.reduce((total, n) => total + n.volume, 0.00)}
                </td>
            </tfoot>
        </table>`;
    }
}
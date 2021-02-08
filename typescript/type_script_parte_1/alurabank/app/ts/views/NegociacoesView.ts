class NegociacoesView extends View<Negociacoes> {

    template(model: Negociacoes) : string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                ${model
                    .listaNegociacoes()
                    .map(n => `
                        
                        <tr>
                            <td>${n.data.getDate()}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                    `).join('')}
            </tbody>
            
            <tfoot>
                <td colspan="3"></td>
                <td colspan="3">
                    ${model.listaNegociacoes().reduce((total, n) => total + n.volume, 0.00)}
                </td>
            </tfoot>
        </table>               
        `
    }
}
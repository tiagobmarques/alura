package JAX.WS.SOAP.api;

import JAX.WS.SOAP.domain.item.*;
import JAX.WS.SOAP.domain.user.AutorizacaoException;
import JAX.WS.SOAP.domain.user.TokenDao;
import JAX.WS.SOAP.domain.user.TokenUsuario;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import java.util.List;

@WebService
public class EstoqueWS {

    private ItemDao dao = new ItemDao();

    @WebMethod(operationName = "todosOsItens")
    @WebResult(name = "item")
    public ListaItens getItens(@WebParam(name = "filtros") Filtros filtros) {
        System.out.println("Chamando getItens()");
        List<Filtro> lista = filtros.getLista();
        List<Item> itensResultado = dao.todosItens(lista);
        return new ListaItens(itensResultado);
    }

    @WebMethod(operationName = "CadastrarItem")
    @WebResult(name = "item")
    public Item cadastrarItem(
            @WebParam(name = "tokenUsuario", header = true) TokenUsuario token,
            @WebParam(name = "item") Item item) throws AutorizacaoException {
        System.out.println("Cadastrando " + item);

        boolean valido = new TokenDao().ehValido(token);

        if(!valido) {
            throw new AutorizacaoException("Token invalido");
        }
        this.dao.cadastrar(item);
        return item;
    }
}
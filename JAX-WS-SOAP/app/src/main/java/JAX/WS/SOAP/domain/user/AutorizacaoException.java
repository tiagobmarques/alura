package JAX.WS.SOAP.domain.user;

import javax.xml.ws.WebFault;

@WebFault(name="AutorizacaoFaultTiago")
public class AutorizacaoException extends Exception {

    //esse numero eh relacionado com a serializacao do java.io mas nao importa nesse contexto
    private static final long serialVersionUID = 1L;

    public AutorizacaoException(String msg) {
        super(msg);
    }

}
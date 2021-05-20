package teste.de.unidade.leilao.infra.dao;

import teste.de.unidade.leilao.dominio.Pagamento;

public interface RepositorioDePagamentos {
    void salva(Pagamento pagamento);
}

package teste.de.unidade.leilao.infra.dao;

import teste.de.unidade.leilao.dominio.Leilao;

import java.util.List;

public interface RepositorioDeLeiloes {
    void salva(Leilao leilao);
    List<Leilao> encerrados();
    List<Leilao> correntes();
    void atualiza(Leilao leilao);
}
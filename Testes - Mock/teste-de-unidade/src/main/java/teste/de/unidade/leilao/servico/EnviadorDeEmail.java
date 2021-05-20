package teste.de.unidade.leilao.servico;

import teste.de.unidade.leilao.dominio.Leilao;

public interface EnviadorDeEmail {
    void envia(Leilao leilao);
}
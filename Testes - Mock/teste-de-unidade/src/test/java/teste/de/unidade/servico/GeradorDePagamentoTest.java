package teste.de.unidade.servico;

import org.junit.Test;
import org.mockito.ArgumentCaptor;
import teste.de.unidade.builder.CriadorDeLeilao;
import teste.de.unidade.leilao.dominio.Leilao;
import teste.de.unidade.leilao.dominio.Pagamento;
import teste.de.unidade.leilao.dominio.Usuario;
import teste.de.unidade.leilao.infra.dao.RepositorioDeLeiloes;
import teste.de.unidade.leilao.infra.dao.RepositorioDePagamentos;
import teste.de.unidade.leilao.servico.Avaliador;
import teste.de.unidade.leilao.servico.GeradorDePagamento;

import java.util.Arrays;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

public class GeradorDePagamentoTest {

    @Test
    public void deveGerarPagamentoParaUmLeilaoEncerrado() {

        RepositorioDeLeiloes leiloes = mock(RepositorioDeLeiloes.class);
        RepositorioDePagamentos pagamentos = mock(RepositorioDePagamentos.class);
        Avaliador avaliador = mock(Avaliador.class);

        Leilao leilao = new CriadorDeLeilao()
                .para("Playstation")
                .lance(new Usuario("José da Silva"), 2000.0)
                .lance(new Usuario("Maria Pereira"), 2500.0)
                .constroi();

        when(leiloes.encerrados()).thenReturn(Arrays.asList(leilao));
        when(avaliador.getMaiorLance()).thenReturn(2500.0);

        GeradorDePagamento gerador =
                new GeradorDePagamento(leiloes, pagamentos, avaliador);
        gerador.gera();

        ArgumentCaptor<Pagamento> argumento = ArgumentCaptor.forClass(Pagamento.class);
        verify(pagamentos).salva(argumento.capture());
        Pagamento pagamentoGerado = argumento.getValue();
        assertEquals(2500.0, pagamentoGerado.getValor(), 0.00001);
    }
}
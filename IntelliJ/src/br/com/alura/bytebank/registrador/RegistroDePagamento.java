package br.com.alura.bytebank.registrador;

import br.com.alura.bytebank.model.Pagamento;
import br.com.alura.bytebank.model.Tipo;

import java.util.ArrayList;
import java.util.List;

public class RegistroDePagamento {

    private final static List<Pagamento> pagamentos = new ArrayList<>();
    private final br.com.alura.bytebank.registrador.validaPagamento validaPagamento = new validaPagamento();
    private validaPagamento validaPagamento1;

    public void registra(List<Pagamento> pagamentos) {
        for (int i = 0; i < pagamentos.size(); i++) {
            Pagamento p = pagamentos.get(i);
            verificaTipo(p);
            salva(p);
        }
        validaPagamento.exibeEfetuados();
    }

    private void exibeEfetuados() {
        validaPagamento.exibeEfetuados();
    }

    private void verificaTipo(Pagamento pagamento) {
        if () {
            if (pagamento.getTipo().equals(Tipo.CREDITO)) {
                pagamento.setValor(pagamento.getValor() * 1.02);
            }
            if (pagamento.getTipo().equals(Tipo.DEBITO)) {
                pagamento.setValor(pagamento.getValor() * 1.001);
            }
        }

        validaPagamento1 = new validaPagamento();
    }

    private void salva(Pagamento pagamento) {
        RegistroDePagamento.pagamentos.add(pagamento);
        System.out.println("Pagamento realizado " + pagamento);
    }

}

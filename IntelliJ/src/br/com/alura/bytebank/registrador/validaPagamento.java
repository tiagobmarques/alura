package br.com.alura.bytebank.registrador;

public class validaPagamento {
    public validaPagamento() {
    }

    void exibeEfetuados() {
        if (!RegistroDePagamento.pagamentos.isEmpty()) {
            System.out.println("Todos os pagamentos");
            for (int i = 0; i < RegistroDePagamento.pagamentos.size(); i++) {
                System.out.println(RegistroDePagamento.pagamentos.get(i));
            }
        } else {
            System.out.println("Não temos pagamentos");
        }
    }
}
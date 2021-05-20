package br.com.alura.maven;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ProdutoTest {

    @Test
    public void verificaPrecoComImposto() {
        Produto juquinha = new Produto("juquinha", 0.10);
        assertEquals(0.11, juquinha.getPrecoComImposto(), 0.00001);
    }
}

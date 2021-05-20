package com.tr.alura;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class LeilaoTest {

    @Test
    public void deveReeberUmLance() {
        Leilao leilao = new Leilao("MacBook");
        assertEquals(0, leilao.getLances().size());

        leilao.propoe(new Lance(new Usuario("Steve Jobs"), 2000));

        assertEquals(1, leilao.getLances().size());
        assertEquals(2000.0, leilao.getLances().get(0).getValor(), 0.00001);
    }

    @Test
    public void deveReceberVariosLances() {
        Leilao leilao = new Leilao("MacBook");
        leilao.propoe(new Lance(new Usuario("Steve Jobs"), 2000));
        leilao.propoe(new Lance(new Usuario("Steve Wozniak"), 3000));

        assertEquals(2, leilao.getLances().size());
        assertEquals(2000.0, leilao.getLances().get(0).getValor(), 0.00001);
        assertEquals(3000.0, leilao.getLances().get(1).getValor(), 0.00001);
    }

    @Test
    public void naoDeveAceitarDoisLancesSeguidosDoMesmoUsuario() {
        Leilao leilao = new Leilao("MacBook Pro");
        Usuario steveJobs = new Usuario("Steve Jobs");

        leilao.propoe(new Lance(steveJobs, 2000));
        leilao.propoe(new Lance(steveJobs, 3000));

        assertEquals(1, leilao.getLances().size());
        assertEquals(2000.0, leilao.getLances().get(0).getValor(), 0.00001);
    }

    @Test
    public void naoDeveAceitarMaisDoQue5LancesDeumMesmoUsuario() {
        Leilao leilao = new Leilao("Macbook");

        Usuario steveJObs = new Usuario("Steve JObs");
        Usuario billGates = new Usuario("BillGates");

        leilao.propoe(new Lance(steveJObs, 2000.00));
        leilao.propoe(new Lance(billGates, 3000.00));

        leilao.propoe(new Lance(steveJObs, 4000.00));
        leilao.propoe(new Lance(billGates, 5000.00));

        leilao.propoe(new Lance(steveJObs, 6000.00));
        leilao.propoe(new Lance(billGates, 7000.00));

        leilao.propoe(new Lance(steveJObs, 8000.00));
        leilao.propoe(new Lance(billGates, 9000.00));

        leilao.propoe(new Lance(steveJObs, 10000.00));
        leilao.propoe(new Lance(billGates, 11000.00));

        leilao.propoe(new Lance(steveJObs, 12000.0));

        assertEquals(10, leilao.getLances().size());
        assertEquals(11000, leilao.getLances().get(leilao.getLances().size() - 1).getValor(), 0.00001);
    }
}

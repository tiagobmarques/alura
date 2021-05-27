package com.tr.alura;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Avaliador {

    private double maiorDeTodos = Double.NEGATIVE_INFINITY;
    private double menorDeTodos = Double.POSITIVE_INFINITY;
    private List<Lance> maiores;

    public void avalia(Leilao leilao) {
        // lançando a exceção
        if(leilao.getLances().size() == 0) {
            throw new RuntimeException("Não é possível avaliar um leilão sem lances!");
        }

        for (Lance lance : leilao.getLances()) {
            if (lance.getValor() > maiorDeTodos) maiorDeTodos = lance.getValor();
            if (lance.getValor() < menorDeTodos) menorDeTodos = lance.getValor();
        }

        maiores = new ArrayList<>(leilao.getLances());
        Collections.sort(maiores, new Comparator<Lance>() {
            @Override
            public int compare(Lance o1, Lance o2) {
                if (o1.getValor() < o2.getValor()) return 1;
                if (o1.getValor() > o2.getValor()) return -1;
                return 0;
            }
        });

        maiores = maiores.subList(0, maiores.size() > 3 ? 3 : maiores.size());

    }

    public List<Lance> getMaiores() {
        return maiores;
    }

    public double getMaiorLance() {
        return maiorDeTodos;
    }

    public double getMenorLance() {
        return menorDeTodos;
    }
}
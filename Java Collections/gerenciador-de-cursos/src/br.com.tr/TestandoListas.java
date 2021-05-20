package br.com.tr;

import java.util.ArrayList;
import java.util.Collections;

public class TestandoListas {

    public static void main(String[] args) {
        String aula1 = "Conhecendo mais de listas";
        String aula2 = "Conhecendo mais de listas";
        String aula3 = "Conhecendo mais de listas";

        List<String> aulas = new ArrayList<String>();

        aulas.add(aula1);
        aulas.add(aula2);
        aulas.add(aula3);

        System.out.println(aulas);


    }
}
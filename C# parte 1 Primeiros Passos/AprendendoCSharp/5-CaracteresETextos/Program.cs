using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _5_CaracteresETextos
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando o projeto 5");

            char primeiraLetra = 'a';

            Console.WriteLine(primeiraLetra);

            primeiraLetra = (char)65;

            Console.WriteLine(primeiraLetra);

            primeiraLetra += (char)1;

            Console.WriteLine(primeiraLetra);

            string titulo = "Teste Tiago";

            string teste2 = @"Teste
                            Teste2
                            TEste3";


            Console.WriteLine(titulo);

            Console.ReadLine();
        }
    }
}

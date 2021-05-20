using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _4_ConversaoEOutrosTiposNumericos
{
    class Program
    {
        static void Main(string[] args)
        {
            float altura = 1.80f;
            double salario;
            salario = 1200.50;

            int salarioEmInterio;
            short quantidade = 150;
            salarioEmInterio = (int)salario;

            Console.WriteLine("Salario Double: " + salario);
            Console.WriteLine("Salario Inteiro: " + salarioEmInterio);
            Console.ReadLine();
        }
    }
}

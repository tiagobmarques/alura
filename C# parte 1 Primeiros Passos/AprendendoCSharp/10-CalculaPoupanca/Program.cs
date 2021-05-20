using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10_CalculaPoupanca
{
    class Program
    {
        static void Main(string[] args)
        {
            double valorInvestido = 20000;
            int contadorMes = 1;

            while(contadorMes <= 12)
            {
                valorInvestido = valorInvestido + valorInvestido * 0.0036;
                contadorMes++;
            }
            
            Console.WriteLine("Após " + contadorMes + " mês , você terá: " + valorInvestido);
            Console.ReadLine();
        }
    }
}

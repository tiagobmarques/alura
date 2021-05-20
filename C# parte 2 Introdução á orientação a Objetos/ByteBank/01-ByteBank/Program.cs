using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01_ByteBank
{
    class Program
    {
        static void Main(string[] args)
        {
            ContaCorrente contadoTiago = new ContaCorrente();

            contadoTiago.titular = "Tiago";
            contadoTiago.agencia = 5409;
            contadoTiago.numero = 111850;
            contadoTiago.saldo = 100;


            Console.WriteLine(contadoTiago.titular);
            Console.WriteLine(contadoTiago.agencia);
            Console.WriteLine(contadoTiago.numero);
            Console.WriteLine(contadoTiago.saldo);

            Console.ReadLine();
        }
    }
}

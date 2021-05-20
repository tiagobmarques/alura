using ByteBank.Funcionarios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBank
{
    class Program
    {
        static void Main(string[] args)
        {
            Funcionario tiago = new Funcionario();
            tiago.Nome = "Tiago";
            tiago.CPF = "asdsa";
            tiago.Salario = 2000;

            Console.WriteLine(tiago.Nome);
            Console.WriteLine(tiago.CPF);
        }
    }
}

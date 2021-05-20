using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBank.Funcionarios
{
    public class Funcionario
    {
        public String Nome { get; set; }
        public String CPF { get; set; }
        public Double Salario { get; set; }

        public double GetBonificacao()
        {
            return Salario * 0.10;
        }


    }
}

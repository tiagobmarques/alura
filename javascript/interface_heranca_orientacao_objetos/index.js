import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./conta/ContaCorrente.js"
import { ContaPoupanca } from "./conta/ContaPoupanca.js"
import { ContaSalario } from "./conta/ContaSalario.js"
import { Diretor } from "./funcionario/Diretor.js";
import { Gerente } from "./funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

// Declaração
const cliente1 = new Cliente("Ricardo", 11122233309);
const diretor1 = new Diretor("Tiago", 50000, 11122233309);
const gerente1 = new Gerente("Samira", 5000, 11122233309);


//const conta = new Conta(1001, cliente1, 50);
const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
const contaPoupancaRicardo = new ContaPoupanca(1001, cliente1, 50);
const contaSalarioRicardo = new ContaSalario(1001, cliente1, 50);

// Ações
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);
contaPoupancaRicardo.sacar(40);

gerente1.cadastrarSenha("123");

const estaAutenticado = SistemaAutenticacao.login(gerente1, "123");
const estaAutenticadoCliente = SistemaAutenticacao.login(cliente1, "123");
// Resultados
console.log(diretor1);
console.log(gerente1);
console.log(contaCorrenteRicardo);
console.log(contaPoupancaRicardo);
console.log(contaSalarioRicardo);

console.log(`Usuario autenticacao: ${estaAutenticado}`);
console.log(`Usuario autenticacao: ${estaAutenticadoCliente}`);
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// Declaração de clientes
const cliente1 = new Cliente("Tiago", "06606787998");
const cliente2 = new Cliente("Alice", "11122233300");

// Declaração contas
const contaCorrenteTiago = new ContaCorrente(1001, cliente1);

contaCorrenteTiago.depositar(100);

const contaCorrenteAlice = new ContaCorrente(1001, cliente2);

contaCorrenteAlice.depositar(150);

// Transferencia
contaCorrenteTiago.transferir(70, contaCorrenteAlice);

// Impressão de resultados
console.log(contaCorrenteTiago);
console.log(contaCorrenteAlice);

console.log(`CPF do Cliente 1: ${contaCorrenteTiago.cliente.cpf}`);
console.log(`CPF do Cliente 2: ${contaCorrenteAlice.cliente.cpf}`);

console.log(`Número de contas: ${ContaCorrente.numeroDeContas}`);
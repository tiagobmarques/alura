import { Cliente } from "../Cliente.js";

export class Conta{
    
    constructor(agencia, cliente, saldoInicial){
        if (this.constructor == Conta){
            throw new Error("Você não pode criar a classe do tipo Conta");
        }
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        throw new Error("Você deve implementar este método na classe herdade");
    }

    _sacar(valor, taxa){
        const valorSacado = valor * taxa;
        if (valorSacado > this._saldo) return 0;

        this._saldo -= valorSacado;
        return valorSacado;
    }

    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}

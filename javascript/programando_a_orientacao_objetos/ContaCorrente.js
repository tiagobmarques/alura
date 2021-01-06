import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    
    _cliente;
    // #saldo = 0  https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    constructor(agencia, cliente){
        this.agencia = agencia;
        this._cliente = cliente;
        ContaCorrente.numeroDeContas ++;
    }

    set cliente(novoValor){
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }
    
    depositar(valor){
        if (valor <= 0) return;

        this._saldo += valor;
        return this._saldo;
    }

    sacar(valor){
        if (valor > this._saldo) return
        
        this._saldo -= valor;
        
        return this._saldo;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}

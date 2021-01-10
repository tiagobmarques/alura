import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{

    sacar(valor){
        const taxa = 1;
        return this._sacar(valor, taxa);
    }
}

export class Funcionario{
    
    constructor(nome, salario, cpf){
        if (this.constructor == Funcionario) {
            throw new Error("Esta classe não pode ser instanciada");
        }

        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;
        this._bonificacao = 0;
        this._senha = "";    
    }

    autenticavel(senha){
        return this._senha == senha;
    }

    cadastrarSenha(senha) {
        this._senha = senha;
    }
}
class Analista(
    nome: String,
    cpf: String,
    salario: Double,
    val senha: Int,
    val plr: Double
) : Funcionario(nome = nome, cpf = cpf, salario = salario) {

    fun isAutenticado(senha: Int): Boolean {
        return (this.senha == senha)
    }

    override val bonificacao: Double get() = salario * 0.1
}
var botao = document.querySelector("#filtra-tabela")

botao.addEventListener("input", function () {
    var filtro = this.value;

    var pacientes = document.querySelectorAll(".paciente")

    pacientes.forEach(function (paciente){
        var nome = paciente.querySelector(".info-nome").textContent
        var expressao = new RegExp(filtro, "i")

        if (expressao.test(nome) || filtro.length == 0){
            paciente.classList.remove("invisivel");
        }
        else{
            paciente.classList.add("invisivel");
        }
    });
})
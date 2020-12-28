var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function () {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteFormulario(form);

    adicionaPaciente(paciente);
    
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    form.reset();
})

function adicionaPaciente(paciente) {
    var pacienteTr = montaTr(paciente);
    
    var erros = validaPaciente(paciente); 
    if(erros.length > 0){
        exibeMensagensdeErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
}
function exibeMensagensdeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var ui = document.createElement("li");
        ui.textContent = erro;
        ul.appendChild(ui);
    });
}

function obtemPacienteFormulario(form) {
    var paciente = {
        nome:form.nome.value,
        altura:form.altura.value,
        peso:form.peso.value,
        gordura:form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;    
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("Nome não pode ser em branco!");
    }

    if (paciente.peso.length == 0) {
        erros.push("Favor preencher o campo peso!");
    }else{
        if (!validaPeso(paciente.peso)){
            erros.push("Peso inválido!");
        }
    }

    if (paciente.altura.length == 0) {
        erros.push("Favor preencher o campo altura!");
    }else{
        if (!validaAltura(paciente.altura)){
            erros.push("Altura inválida!");
        }
    }

    if (paciente.gordura.length == 0) {
        erros.push("Favor preencher o campo gordura!");
    }

    return erros;
}
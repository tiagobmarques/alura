var botao = document.querySelector('#adicionar-paciente');

botao.addEventListener('click', function (event) {
    event.preventDefault();
    
    var form  = document.querySelector("#form-adiciona");

    // Extrai informações do formulario
    var paciente = obtemPacientedoFormulario(form);

    var erros = validaPaciente(paciente);

    if (erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);
    // criar a tr e td do paciente
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    form.reset();
});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);

    //adiciona o paciente na tebal
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
   
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");

        li.textContent = erro;

        ul.appendChild(li);
    });
}

function obtemPacientedoFormulario(form) {

    var paciente = {
        nome : form.nome.value,
        altura : form.altura.value,
        peso : form.peso.value,
        gordura : form.gordura.value,
        imc : calculaImc(form.peso.value, form.altura.value)
    };

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    
    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O Nome não pode ser em branco!");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("O Peso é inválido!");
    }

    
    if (!validaAltura(paciente.altura)) {
        erros.push("A Altura é inválida!");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco!");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco!");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco!");
    }
    return erros;
}
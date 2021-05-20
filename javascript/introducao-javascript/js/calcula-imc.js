var titulo = document.querySelector("h1");

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent
    var altura = paciente.querySelector(".info-altura").textContent
    
    var pesoehValido = validaPeso(peso);
    var alturaehValido = validaAltura(altura);

    var tdImc = paciente.querySelector(".info-imc");

    if (!pesoehValido) {
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaehValido) {
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoehValido && alturaehValido){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }

}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000 ){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura) {
    
    if (altura >= 0 && altura < 3 ){
        return true;
    }else{
        return false;
    }
}
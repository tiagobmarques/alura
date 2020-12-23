var pacientes = document.querySelectorAll(".paciente");

console.log(pacientes);

for (let index = 0; index < pacientes.length; index++) {
    const paciente = pacientes[index];
  
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var imcSelector = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 1000) {
        pesoValido = false;
        imcSelector.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        alturaValida = false;
        imcSelector.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        var imc = peso / (altura * altura);
        console.log(imc);
        imcSelector.textContent = imc.toFixed(2);
    }
}
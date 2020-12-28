var botaoBusca = document.querySelector("#busca-paciente");

botaoBusca.addEventListener("click", function () {
    var request = new XMLHttpRequest();
    
    request.open("GET", "https://api-pacientes.herokuapp.com/pacientes")

    request.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");

        if (request.status == "200"){
            erroAjax.classList.add("invisivel");
            var pacientes = JSON.parse(request.responseText);
            
            pacientes.forEach(paciente => {
                adicionaPaciente(paciente);
            });
        }else{
            console.log(request.status);
            console.log(request.responseText);
            erroAjax.classList.remove("invisivel");
        }
    })

    request.send();
})

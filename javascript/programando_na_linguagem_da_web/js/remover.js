var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeout");
    setTimeout(function (params) {
        event.target.parentNode.remove();    
    }, 500);    
});

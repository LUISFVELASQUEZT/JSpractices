window.onload = iniciar;

function iniciar() {
    // Boton agregar escucha el click
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar);
    // Renderiza la nota
    mostrarNotas();
}

function clickBtnAgregar() {
    // Traer txtNota
    var txtNota = document.getElementById("txtNota");
    var notas = [];
    if (localStorage.notas) {
        notas = JSON.parse(localStorage.notas);
    }
    notas.push(txtNota.value);
    localStorage.notas = JSON.stringify(notas);
    mostrarNotas();
}

function mostrarNotas() {
    // Trae divNotas
    var divNotas = document.getElementById("divNotas");

    var notas = [];
    if (localStorage.notas) {
        notas = JSON.parse(localStorage.notas);
    }
    var html = "";
    for (var nota of notas) {
        html += nota + "<br/>";
    }
    divNotas.innerHTML = html;
}


DOMPointReadOnly
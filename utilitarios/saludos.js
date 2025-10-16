saludar = function () {
    let nombre;
    let apellido;
    nombre = recuperaTexto("txtNombre");
    apellido = recuperaTexto("txtApellido");

}

recuperaTexto = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}
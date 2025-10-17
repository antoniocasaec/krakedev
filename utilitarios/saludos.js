saludar = function () {
    let nombre;
    let apellido;
    nombre = recuperarTexto("txtNombre");
    apellido = recuperarTexto("txtApellido");
    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura");
    let mensajeBienvenida = "Bienvenido " + nombre + " " + apellido;
    mostrarTexto("lblResultado", mensajeBienvenida);
    mostrarImagen("idImage", "./imagenes/mininos.gif");
    mostrarTextoEnCaja("txtNombre", "");

}

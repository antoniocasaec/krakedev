validarPlaca = function () {
    //variables para recuperar los valores de las cajas de texto
    let v_placa = recuperarTexto("txtPlaca");
    let erroresEstructura;

    erroresEstructura = validarEstructura(v_placa);

    if (erroresEstructura == null) {
        mostrarTexto("lblPlaca", "ESTRUCTURA VALIDA");
        mostrarTexto("lblErrores", "N/A");

    } else {
        mostrarTexto("lblPlaca", "ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErrores", erroresEstructura);
    }
}

limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
    mostrarTextoEnCaja("txtPlaca", "");

    //mostrarTextoEnCaja("txtPorcentajeDescuento", "0");
    mostrarTexto("lblPlaca", "");
    mostrarTexto("lblErrores", "N/A");


}

/* SI TODO FUNCIONA, HACER UN PUSH */

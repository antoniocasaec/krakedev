validarPlaca = function () {
    //variables para recuperar los valores de las cajas de texto
    let v_placa = recuperarTexto("txtPlaca");
    let primeraLetra = v_placa.charAt(0);
    let segundaLetra = v_placa.charAt(1);
    let erroresEstructura;
    let v_provincia;
    let tipo;

    erroresEstructura = validarEstructura(v_placa);

    if (erroresEstructura == null) {
        mostrarTexto("lblPlaca", "ESTRUCTURA VALIDA");
        mostrarTexto("lblErrores", "N/A");

        v_provincia = validarProvincia(primeraLetra);
        mostrarTexto("lblProvincia", v_provincia);

        tipo = optenerTipoVehiculo(segundaLetra);
        mostrarTexto("lblTipo", tipo);


    } else {
        mostrarTexto("lblPlaca", "ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErrores", erroresEstructura);
        mostrarTexto("lblProvincia", "");
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
    mostrarTexto("lblProvincia", "");


}

/* SI TODO FUNCIONA, HACER UN PUSH */

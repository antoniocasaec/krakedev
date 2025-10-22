jugar = function (p_seleccionado) {
    //variables para recuperar los valores de las cajas de texto
    let v_generarElemento;
    let primeraLetra = v_placa.charAt(0);
    let segundaLetra = v_placa.charAt(1);
    let ultimaaLetra = v_placa.charAt(v_placa.length-1);
    let erroresEstructura;
    let v_provincia;
    let v_tipo;
    let v_dia;

    v_generarElemento = generarElemento();)
            console.log("0 v_generarElemento");

    if (erroresEstructura == null) {
        mostrarTexto("lblPlaca", "ESTRUCTURA VALIDA");
        mostrarTexto("lblErrores", "N/A");

        v_provincia = validarProvincia(primeraLetra);
        mostrarTexto("lblProvincia", v_provincia);

        v_tipo = optenerTipoVehiculo(segundaLetra);
        mostrarTexto("lblTipo", v_tipo);

        v_dia = obtenerDiaPicoYPlaca(ultimaaLetra);
        mostrarTexto("lblDiaPico", v_dia);

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
    mostrarTexto("lblDiaPico", "");


}

/* SI TODO FUNCIONA, HACER UN PUSH */

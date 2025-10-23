jugar = function (p_seleccionado) {
    //variables para recuperar los valores de las cajas de texto

    mostrarTexto("lblSeleccion", p_seleccionado);
    let v_seleccionado = p_seleccionado;
    let v_generarElemento;
    let v_generarRuta;
    let v_determinarGanador;

    let erroresEstructura;
    let v_provincia;
    let v_tipo;
    let v_dia;

    v_generarElemento = generarElemento();
    console.log("v_generarElemento: " + v_generarElemento);

    v_generarRuta = generarRuta(v_generarElemento);
    console.log("generarRuta: " + generarRuta);

    v_determinarGanador = determinaGanador(v_generarElemento, v_seleccionado);
    console.log("v_determinarGanador: " + v_determinarGanador);

    if (v_determinarGanador) {


        if (v_determinarGanador == "0") {

            console.log("0 empate");

        } else if (p_jugador1 > p_jugador2) {

            resultado = "1";
            console.log("1 gana jugador 1");


        } else if (p_jugador1 < p_jugador2) {

            resultado = "2";
            console.log("2 gana jugador 2");

        } else {
            console.log("Valor errado");
        }



    }


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
//variables para recuperar los valores de las cajas de texto
let puntosUsuario = 0;
let puntosComputador = 0;
let partida = 0;

jugar = function (p_seleccionado) {
    //variables para recuperar los valores de las cajas de texto
    //mostrarTexto("lblSeleccion", p_seleccionado);
    let v_seleccionado = p_seleccionado;
    let v_generarElemento;
    let v_generarRuta;
    let v_determinarGanador;


    if (puntosUsuario == 5 || puntosComputador == 5) {
        puntosUsuario = 0;
        puntosComputador = 0;
    }

    partida = partida + 1;
    mostrarTexto("lblPartida", partida);

    v_generarElemento = generarElemento();
    console.log("v_generarElemento: " + v_generarElemento);

    v_generarRuta = generarRuta(v_generarElemento);
    console.log("generarRuta: " + generarRuta);

    mostrarImagen("lblimgNoImagen", v_generarRuta);

    v_determinarGanador = determinaGanador(v_seleccionado, v_generarElemento);
    console.log("v_determinarGanador: " + v_determinarGanador);

    if (v_determinarGanador == 0) {
        console.log("0 empate");
        mostrarTexto("lblquiengano", "0 empate");
    } else if (v_determinarGanador == 1) {
        console.log("1 Ganaste la partida!!!");
        mostrarTexto("lblquiengano", "1 Ganaste la partida!!!");
        puntosUsuario = v_determinarGanador + 1;
        mostrarTexto("lblUsuario", puntosUsuario);
    } else if (v_determinarGanador == 2) {
        resultado = "2";
        console.log("2 Perdiste la partida!!!");
        mostrarTexto("lblquiengano", "2 Perdiste la partida!!!");
        puntosComputador = puntosComputador + 1;
        mostrarTexto("lblComputador", puntosComputador);
    }

    if (puntosUsuario == 5) {
        mostrarTexto("lblquiengano", "HAS GANADO EL JUEGO");
    }

    if (puntosComputador == 5) {
        mostrarTexto("lblquiengano", "EL COMPUTADOR TE HA GANADO");
    }

    limpiar = function () {
        // mostrarTextoEnCaja("txtPlaca", "");

        //mostrarTextoEnCaja("txtPorcentajeDescuento", "");
        mostrarTexto("lblUsuario", "0");
        mostrarTexto("lblComputador", "0");
        mostrarTexto("lblPartida", "0");
        mostrarTexto("lblquiengano", "");
        mostrarImagen("lblimgNoImagen", "./imagenes/notas.png");

        //mostrarImagen(idComponente, rutaImagen);
    }
}
/* SI TODO FUNCIONA, HACER UN PUSH */
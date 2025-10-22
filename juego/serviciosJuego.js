obtenerAleatorio = function () {
    let aleatorio = Math.random();
    let numeroMultiplicado = aleatorio * 3;
    let numeroEntero = parseInt(numeroMultiplicado) + 1;
    console.log(numeroEntero);
    return numeroEntero;
}

generarElemento = function () {
    let aleatorio = obtenerAleatorio();
    let resultado;
    cambiarTexto("lblNumero", aleatorio);
    if (aleatorio == 1) {
        cambiarTexto("lblResultado", "Piedra");
        resultado = "Piedra";
    } else if (aleatorio == 2) {
        cambiarTexto("lblResultado", "Papel");
        resultado = "Papel";
    } else if (aleatorio == 2) {
        cambiarTexto("lblResultado", "Tijjera");
        resultado = "Tijjera";
    } else {
        cambiarTexto("lblResultado", "Numero invalido");
        resultado = "Elemento Invalido";
    }
    return resultado;
}

determinaGanador = function (p_jugador1, p_jugador2) {
    let resultado;
    //    cambiarTexto("lblNumero", aleatorio);
    if (p_jugador1 == p_jugador2) {

        resultado = "0";
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

    return resultado;
}


generarRuta = function (p_imagen) {
    let resultado;
    //    cambiarTexto("lblNumero", aleatorio);
    if (p_imagen == "Peidra") {
        cambiarTexto("lblResultado", "Piedra");
        resultado = "./imagenes/piedra.png";
        console.log("./imagenes/piedra.png");

    } else if (p_imagen == "Papel") {
        cambiarTexto("lblResultado", "Piedra");
        resultado = "./imagenes/papel.png";
        console.log("./imagenes/papel.png");


    } else if (p_imagen == "Tijera") {
        cambiarTexto("lblResultado", "Piedra");
        resultado = "./imagenes/tijera.png";
        console.log("./imagenes/tijera.png");

    } else {
        console.log("Valor errado");
    }
}

obtenerAleatorio = function () {
    let aleatorio = Math.random();
    let numeroMultiplicado = aleatorio * 3;
    let numeroEntero = parseInt(numeroMultiplicado) + 1;
    console.log(numeroEntero);
    return numeroEntero;
} // OK

generarElemento = function () {
    let aleatorio = obtenerAleatorio();
    let resultado;
    if (aleatorio == 1) {
        resultado = "Piedra";
    } else if (aleatorio == 2) {
        resultado = "Papel";
    } else if (aleatorio == 3) {
        resultado = "Tijera";
    } else {
        resultado = "Elemento Invalido";
    }
    return resultado;
} // OK

determinaGanador = function (p_jugador1, p_jugador2) {
    let resultado;
    //    cambiarTexto("lblNumero", aleatorio);
    if (p_jugador1 === p_jugador2) {
        resultado = 0;
        console.log("0 empate");

    } else if  ((p_jugador1 === "Piedra" && p_jugador2 === "Tijera") ||
        (p_jugador1 === "Papel" && p_jugador2 === "Piedra") ||
        (p_jugador1 === "Tijera" && p_jugador2 === "Papel")) {
        resultado = 1;
        console.log("1 gana jugador 1");

    } else {
        resultado = 2;
        console.log("2 gana jugador 2");

    } //OK

    return resultado;

}

generarRuta = function (p_imagen) {
    let resultado;
    //    cambiarTexto("lblNumero", aleatorio);
    if (p_imagen === "Piedra") {
        resultado = "./imagenes/piedra.png";
        console.log("./imagenes/piedra.png");

    } else if (p_imagen === "Papel") {
        resultado = "./imagenes/papel.png";
        console.log("./imagenes/papel.png");


    } else if (p_imagen === "Tijera") {
        resultado = "./imagenes/tijera.png";
        console.log("./imagenes/tijera.png");

    } 
    return resultado;
} //OK

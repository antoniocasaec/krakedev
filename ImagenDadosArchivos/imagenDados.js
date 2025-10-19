let puntos = 0;
let lazamientos = 5;

jugar = function () {
    let resultado;
    resultado = lanzarDado();
    console.log(resultado);

    mostraCara(resultado);
    cambiarTexto("lblPuntaje", resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();
    console.log("puntos: " + puntos);
    console.log("lanzamientos: " + lazamientos);
}

modificarPuntos = function (p_numero) {
    puntos = puntos + p_numero;
    cambiarTexto("lblPuntaje", puntos);
    if (puntos > 20) {
        cambiarTexto("lblResultado", "GANASTE");
        limpiar();
    }
}

modificarLanzamientos = function () {
    lazamientos = lazamientos - 1;
    cambiarTexto("lblLanzamiento", lazamientos);
    if (lazamientos < 0) {
        cambiarTexto("lblResultado", "GAME OVER");
        limpiar();
    }
}

limpiar = function () {
    puntos = 0;
    lazamientos = 5;
    cambiarTexto("lblPuntaje", puntos);
    cambiarTexto("lblLanzamiento", lazamientos);
    cambiarImagen("imgDado", "");
}
mostraCara = function (p_dado) {
    if (p_dado == 1) {
        cambiarImagen("imgDado", "dados1.png");
    } else if (p_dado == 2) {
        cambiarImagen("imgDado", "dados2.png");
    } else if (p_dado == 3) {
        cambiarImagen("imgDado", "dados3.png");
    } else if (p_dado == 4) {
        cambiarImagen("imgDado", "dados4.png");
    } else if (p_dado == 5) {
        cambiarImagen("imgDado", "dados5.png");
    } else if (p_dado == 6) {
        cambiarImagen("imgDado", "dados6.png");
    }
}
lanzarDado = function () {
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio = Math.random();
    aleatorioMultiplicado = aleatorio * 6;
    aleatorioEntero = parseInt(aleatorioMultiplicado);
    valorDado = aleatorioEntero + 1;
    return valorDado;
}
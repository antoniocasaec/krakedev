calcularPromedioNotas = function () {
    let promedio;
    let v_n1 = recuperarFloat("txtn1");
    let v_n2 = recuperarFloat("txtn2");
    let v_n3 = recuperarFloat("txtn3");
    promedio = calcularPromedio(v_n1, v_n2, v_n3);
    mostrarTexto("lblPromedio", promedio);
    if (promedio > 0 && promedio < 5) {
        mostrarImagen("lblImg", "Reprobar.gif");
        mostrarTexto("lblResultado", "Reprobado");
    } else if (promedio >= 5 && promedio <= 8) {
        mostrarImagen("lblImg", "Aprobado.gif");
        mostrarTexto("lblResultado", "Aprobado");
    } else if (promedio > 8 && promedio <= 10) {
        mostrarImagen("lblImg", "Excelente.gif");
        mostrarTexto("lblResultado", "Excelente");
    } else {
        mostrarImagen("lblImg", "Incorrecto.gif");
        mostrarTexto("lblResultado", "Datos Incorrectos");
    }
}

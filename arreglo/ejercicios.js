let notas = [];

agregarElementos = function () {
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

recorrerArreglo = function () {
    let notaR;
    for (let indice = 0; indice <= notas.length - 1; indice++) {
        notaR = notas[indice];
        console.log(notaR);
    }
}


probarAgregar = function () {
    let notaRecuperada;
    notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}


agregarNota = function (nota) {
    notas.push(nota);
    //mostrarNotas();
}


calcularPromedio = function () {
    let sumaNotas = 0;
    let promedio;
    for (let indice = 0; indice < notas.length; indice++) {
        sumaNotas += notas[indice];
    }
    promedio = sumaNotas / notas.length;
    return promedio;
}

ejecutarPromedio = function () {
    let promedioCalculado = calcularPromedio();
    mostrarTexto("lblPromedio", promedioCalculado);
}
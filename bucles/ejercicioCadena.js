ejecutarCadenaInvertida = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    invertiCadenna(mensaje);
}

ejecutarCadena = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadenna(mensaje);
}
recorrerCadenna = function (cadena) {
    //0.123
    //Juan
    let caracter;
    for (let pos = 0; pos < cadena.length; pos++) {
        caracter = cadena.charAt(pos);
        console.log("Caracter uno: " + caracter + " , posicion: " + pos);
    }

    for (let pos = 0; pos <= cadena.length - 1; pos++) {
        caracter = caracter.charAt(pos);
        console.log("Caracter dos: " + caracter + " , posicion: " + pos);
    }
}

invertiCadenna = function (cadena) {
    let caracter = "";
    let resultado = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        caracter = cadena.charAt(i);
        resultado += caracter;
        mostrarTexto("txtFinal", resultado);
    }
}



/*
invertiCadenna = function (cadena) {
    let caracter;
    let resultado = "";
    let longitud = cadena.length;

    for (let invertir = longitud - 1; invertir >= 0; invertir--) {
        caracter = cadena.charAt(invertir);
        resultado = resultado + caracter;

        mostrarTextoEnCaja("txtLetra", caracter);
        mostrarTextoEnCaja("txtFinal", resultado);

        console.log("Inverti: " + resultado);
    }
}
*/
mostraNumero = function () {
    console.log("antes de for");
    for (let i = 0; i < 4; i++) {
        console.log(i);
    }
    console.log("despues de for");
}

mostrarNumero2 = function () {
    console.log("antes de for");
    for (let indice = 0; indice <= 5; indice++) {
        console.log(indice);
    }
    console.log("despues de for");
}

mostrarPares = function () {
    console.log("antes de for");
    for (let x = 2; x <= 10; x += 2) {
        console.log(x);
    }
    console.log("despues de for");
}

mostrarInverso = function () {
    console.log("antes de for");
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }
    console.log("despues de for");
}

hakearNasaPeli = function () {
    // hakendo nasa 0%---- 100%
    for (p = 0; p <= 100; p++) {
        console.log("Hakeado nasa " + p + "%");
    }
    console.log("La NASA ha sido Hakeada");

}

mostrarImpares = function () {
    console.log("antes de for");
    for (let x = 1; x <= 21; x += 2) {
        console.log(x);
    }
    console.log("despues de for");
}

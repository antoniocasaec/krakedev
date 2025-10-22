esMayuscula = function (p_letra) {
    let v_letra = p_letra;
    //let v_caracteresAscii = v_letra.charCodeAt(0);
    let v_autorizado;

    if (v_letra >= 65 && v_letra <= 90) {
        v_autorizado = true;
    } else {
        v_autorizado = false;
    }

    return v_autorizado;
}

esDigito = function (p_digito) {
    let v_digito = p_digito;
    //let v_caracteresAscii = v_digito.charCodeAt(0);
    let v_autorizado;

    if (v_digito >= 48 && v_digito <= 57) {  // 0 - 9 en ASCII
        v_autorizado = true;
    } else {
        v_autorizado = false;
    }

    return v_autorizado;
}

esGuion = function (p_caracter) {
    let v_caracter = p_caracter;
    //let v_caracterAscii = v_caracter.charCodeAt(0);
    let v_autorizado;

    if (v_caracter === 45) { // '-' en ASCII
        v_autorizado = true;
    } else {
        v_autorizado = false;
    }

    return v_autorizado;
}

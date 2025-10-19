calcularTasaInteres = function (p_ingresoAnual) {
    let v_ingresoanual = p_ingresoAnual;
    let v_tasa;
    if (v_ingresoanual < 300000) {
        v_tasa = 16 / 100;
    } else if (v_ingresoanual >= 300000 && v_ingresoanual < 500000) {
        v_tasa = 15 / 100;
    } else if (v_ingresoanual >= 500000 && v_ingresoanual < 1000000) {
        v_tasa = 14 / 100;
    } else if (v_ingresoanual >= 1000000 && v_ingresoanual < 2000000) {
        v_tasa = 13 / 100;
    } else if (v_ingresoanual >= 2000000) {
        v_tasa = 12 / 100;
    }

    return (v_tasa);
}

calcularCapacidadPago = function (p_edad, p_ingresos, p_egresos) {
    let v_utilidad = p_ingresos - p_egresos;
    let v_cuota;
    if (p_edad > 50) {
        v_cuota = v_utilidad * (30 / 100);
    } else if (p_edad <= 50) {
        v_cuota = v_utilidad * (30 / 100);
    }
    return (v_cuota);
}

calcularDescuento = function (p_precio, p_cantidad) {
    let v_descuento;
    let v_precio = p_precio;

    if (p_cantidad <= 3) {
        v_precio = p_precio;
    } else if (p_cantidad >= 3 && p_cantidad <= 5) {
        v_precio = p_precio - (2 / p_precio);
    } else if (p_cantidad >= 6 && p_cantidad <= 11) {
        v_precio = p_precio - (3 / p_precio);
    } else if (p_cantidad >= 12) {
        v_precio = p_precio - (4 / p_precio);
    }

    return v_precio;
}

determinarColesterolLDL = function (p_nivelColesterol) {
    let v_nivelColesterol = p_nivelColesterol;
    let v_estadoColesterol;

    if (v_nivelColesterol < 100) {
        v_estadoColesterol = "ÓPTIMO";
    } else if (v_nivelColesterol >= 100 && v_nivelColesterol <= 139) {
        v_estadoColesterol = "CASI ÓPTIMO";
    } else if (v_nivelColesterol >= 130 && v_nivelColesterol <= 159) {
        v_estadoColesterol = "LÍMITE ALTO";
    } else if (v_nivelColesterol >= 160 && v_nivelColesterol <= 189) {
        v_estadoColesterol = "ALTO";
    } else if (v_nivelColesterol >= 190) {
        v_estadoColesterol = "MUY ALTO";
    }

    return v_estadoColesterol;
}

validarClave = function (p_clave) {
    let v_caracteres = p_clave.length;
    let v_autorizado;

    if (v_caracteres >= 8 && v_caracteres <= 16) {
        v_autorizado = true;
    } else {
        v_autorizado = false;
    }

    return v_autorizado;
}

esMayuscula = function (p_letra) {
    let v_letra = p_letra;
    let v_caracteresAscii = v_letra.charCodeAt(0);
    let v_autorizado;

    if (v_caracteresAscii >= 65 && v_caracteresAscii <= 90) {
        v_autorizado = true;
    } else {
        v_autorizado = false;
    }

    return v_autorizado;
}

esMinuscula = function (p_letra) {
    let v_letra = p_letra;
    let v_caracteresAscii = v_letra.charCodeAt(0);
    let v_autorizado;

    if (v_caracteresAscii >= 97 && v_caracteresAscii <= 122) {
        v_autorizado = true;
    } else {
        v_autorizado = false;
    }

    return v_autorizado;
}

esDigito = function (p_digito) {
    let v_digito = p_digito;
    let v_caracteresAscii = v_digito.charCodeAt(0);
    let v_autorizado;

    if (v_caracteresAscii >= 48 && v_caracteresAscii <= 57) {  // 0 - 9 en ASCII
        v_autorizado = true;
    } else {
        v_autorizado = false;
    }

    return v_autorizado;
}

darPermisos = function (p_notaMate, p_notaFisica, p_notaGeo) {
    let v_notaMate = p_notaMate;
    let v_notaFisica = p_notaFisica;
    let v_notaGeo = p_notaGeo;
    let v_autorizado;

    if (v_notaMate >= 90 || v_notaFisica >= 90 || v_notaGeo >= 90) {
        v_autorizado = true;
    } else {
        v_autorizado = false;
    }

    return v_autorizado;
}

otorgarPermisos = function (p_notaMate, p_notaFisica, p_notaGeo) {
    let v_notaMate = p_notaMate;
    let v_notaFisica = p_notaFisica;
    let v_notaGeo = p_notaGeo;
    let v_autorizado;

    if (
        (v_notaMate >= 90 && (v_notaFisica >= 90 || v_notaGeo >= 80)) &&
        v_notaFisica > v_notaMate
    ) {
        v_autorizado = true;
    } else {
        v_autorizado = false;
    }

    return v_autorizado;
}

dejarSalir = function (p_notaMate, p_notaFisica, p_notaGeo) {
    let v_notaMate = p_notaMate;
    let v_notaFisica = p_notaFisica;
    let v_notaGeo = p_notaGeo;
    let v_autorizado;

    if (
        (v_notaMate > 90 || v_notaFisica > 90 || v_notaGeo > 90) &&
        v_notaFisica > v_notaMate
    ) {
        v_autorizado = true;
    } else {
        v_autorizado = false;
    }

    return v_autorizado;
}
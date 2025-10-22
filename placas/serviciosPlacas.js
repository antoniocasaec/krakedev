validarEstructura = function (p_placa) {
    let v_caracteres = p_placa.length;
    let v_placa = p_placa;
    let v_autorizado;
    let v_letra0 = v_placa.charCodeAt(0);
    let v_letra1 = v_placa.charCodeAt(1);
    let v_letra2 = v_placa.charCodeAt(2);
    let v_letra3 = v_placa.charCodeAt(3);
    let v_letra4 = v_placa.charCodeAt(4);
    let v_letra5 = v_placa.charCodeAt(5);
    let v_letra6 = v_placa.charCodeAt(6);
    let v_letra7 = v_placa.charCodeAt(7);
    let v_errores = "";

    if (v_caracteres == 7 || v_caracteres == 8) {
        v_autorizado = true;

        if (esMayuscula(v_letra0)) {
            null;
        } else {
            v_errores = "El primer caracter debe ser mayuscula.";
            v_autorizado = false;
        }

        if (esMayuscula(v_letra1)) {
            null;
        } else {
            v_errores = v_errores + " - " + "El segundo caracter debe ser mayuscula.";
            v_autorizado = false;
        }
        if (esMayuscula(v_letra2)) {
            null;
        } else {
            v_errores = v_errores + " - " + "El tercer caracter debe ser mayuscula.";
            v_autorizado = false;
        }

        if (esGuion(v_letra3)) {
            null;
        } else {
            v_errores = v_errores + " - " + "El cuarto caracter debe ser un guion.";
            v_autorizado = false;
        }


        if (esDigito(v_letra4)) {
            null;
        } else {
            v_errores = v_errores + " - " + "El quinto caracter debe ser un numero.";
            v_autorizado = false;
        }

        if (esDigito(v_letra5)) {
            null;
        } else {
            v_errores = v_errores + " - " + "El sexto caracter debe ser un numero.";
            v_autorizado = false;
        }
        if (esDigito(v_letra6)) {
            null;
        } else {
            v_errores = v_errores + " - " + "El septimo caracter debe ser un numero.";
            v_autorizado = false;
        }

        if (v_caracteres == 8) {

            if (esDigito(v_letra7)) {
                null;
            } else {
                v_errores = v_errores + " - " + "El octavo caracter debe ser un numero.";
                v_autorizado = false;
            }
        }

    } else {
        v_errores = "La longitud de la placa debe ser de 7 u 8 caracteres ";
        v_autorizado = false;
    }

    if (v_autorizado == false) {
        return v_errores;

    } else {
        return null;

    }




}

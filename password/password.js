password = function () {
    let mensaje;
    let resultado;

    mensaje = recuperarTexto("txtCadena");
    resultado = validarPassword(mensaje);

    if (resultado.length === 0) {
    
        mostrarTexto("txtFinal", "OK: " + resultado);
    } else {
    
        mostrarTexto("txtFinal", "Errores: " + resultado);
    }
}
   
validarPassword = function (password) {
    let errores = "";

    // Validar longitud mínima y máxima
    if (password.length < 8) {
        errores += "La contraseña debe tener al menos 8 caracteres.\n";
    }
    if (password.length > 16) {
        errores += "La contraseña no debe tener más de 16 caracteres.\n";
    }

    // Variables para validar los otros requisitos
    let tieneMayuscula = false;
    let tieneDigito = false;
    let tieneEspecial = false;

    // Recorremos la cadena caracter por caracter
    for (let i = 0; i < password.length; i++) {
        let caracter = password.charAt(i);

        // Validar mayúscula
        if (caracter >= 'A' && caracter <= 'Z') {
            tieneMayuscula = true;
        }

        // Validar dígito
        if (caracter >= '0' && caracter <= '9') {
            tieneDigito = true;
        }

        // Validar carácter especial permitido
        if (caracter === '*' || caracter === '-' || caracter === '_') {
            tieneEspecial = true;
        }
    }

    // Verificar resultados
    if (!tieneMayuscula) {
        errores += "Debe contener al menos una letra mayúscula.\n";
    }
    if (!tieneDigito) {
        errores += "Debe contener al menos un número.\n";
    }
    if (!tieneEspecial) {
        errores += "Debe contener al menos un carácter especial (*, - o _).\n";
    }

    // Retornar mensaje final
    return errores;
}


//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
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



// Variable global
let palabraSecreta = "";

// Función invocada desde el botón GUARDAR
function guardarPalabra() {
    // Obtener la palabra desde la caja de texto
    let palabra = document.getElementById("txtSecreta").value;

    // Validar que tenga exactamente 5 caracteres
    if (palabra.length !== 5) {
        alert("Debe ingresar una palabra de 5 letras mayúsculas.");
        return;
    }

    // Validar que todos los caracteres sean letras mayúsculas
    let esValida = true;

    for (let i = 0; i < palabra.length; i++) {
        let caracter = palabra.charAt(i);

        // Verifica si cada carácter está entre 'A' y 'Z'
        if (caracter < 'A' || caracter > 'Z') {
            esValida = false;
            break;
        }
    }

    // Si no es válida, mostrar mensaje
    if (!esValida) {
        alert("Debe ingresar una palabra de 5 letras mayúsculas.");
        return;
    }

    // Si pasa todas las validaciones, guardar en la variable global
    palabraSecreta = palabra;

    // Mostrar en consola
    console.log("Palabra ingresada:", palabraSecreta);
}

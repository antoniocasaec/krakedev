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



mostrarLetra = function (letra, posicion) {
    // Validar que la posición esté entre 0 y 4
    if (posicion < 0 || posicion > 4) {
        alert("La posición debe estar entre 0 y 4");
        return;
    }

    // Usar un bucle for para recorrer los divs
    for (let i = 0; i < 5; i++) {
        let divActual = document.getElementById("div" + i);

        if (i === posicion) {
            divActual.innerText = letra; // Mostrar la letra en el div correspondiente
        } else {
            divActual.innerText = ""; // Limpiar los demás divs (opcional)
        }
    }
}



let palabraSecreta1 = "HOLAQ"; // puedes cambiarla o asignarla desde guardarPalabra()

/*
validar = function (letra) {
    // Variable local para contar cuántas letras se encontraron
    let letrasEncontradas = 0;

    // Recorrer cada carácter de la palabra secreta
    for (let i = 0; i < palabraSecreta.length; i++) {
        // Obtener el carácter actual
        let caracter = palabraSecreta.charAt(i);

        // Verificar si coincide con la letra ingresada
        if (caracter === letra) {
            // Llama a mostrarLetra pasando la letra y la posición
            mostrarLetra(letra, i);

            // Incrementar el contador
            letrasEncontradas++;
        }
    }
}

*/
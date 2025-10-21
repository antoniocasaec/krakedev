CalcularDescuentoPorVolumen = function (p_subtotal, p_cantidad) {
    let v_cantidad = p_cantidad;
    let v_subtotal
    if (v_cantidad < 3) {
        v_subtotal = v_subtotal;
    }

    if (v_cantidad >= 3 && v_cantidad <= 5) {
        v_subtotal = (p_subtotal * (3/100) );
    }

    if (v_cantidad >= 6 && v_cantidad <= 11) {
        v_subtotal = (p_subtotal * (4/100) );
    }

    if (v_cantidad >= 12) {
        v_subtotal = (p_subtotal * (5/100 ));
    }
    return v_subtotal;
}



CalcularValorDescuento = function (monto, porcentajeDescuento) {
    let resultado = (monto * porcentajeDescuento) / 100;
    return resultado;
}

CalcularIva = function (monto) {
    let resultado = (monto * 12) / 100;
    return resultado;
}

CalcularSubTotal = function (precio, cantidad) {
    let resultado = precio * cantidad;
    return resultado;
}

CalcularTotal = function (subtotal, descuento, iva) {
    let resultado = subtotal - descuento + iva;
    return resultado;
}



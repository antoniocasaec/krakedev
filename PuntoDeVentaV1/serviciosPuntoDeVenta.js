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
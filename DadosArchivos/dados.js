jugar = function (){
    let aleatorio = lanzarDados();
    cambiarTexto("lblNumero",aleatorio);
}

lanzarDados = function(){
   let aleatorio = Math.random();
   let numeroMultiplicado = aleatorio*6;
   let numeroEntero = parseInt(numeroMultiplicado)+1;
   console.log(numeroEntero); 
   return numeroEntero;
}
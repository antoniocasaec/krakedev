jugar = function (){
    let aleatorio = lanzarDados();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        console.log("Es mayor a 3");
        console.log("Ganaste");
    }
}

lanzarDados = function(){
   let aleatorio = Math.random();
   let numeroMultiplicado = aleatorio*6;
   let numeroEntero = parseInt(numeroMultiplicado)+1;
   console.log(numeroEntero); 
   return numeroEntero;
}
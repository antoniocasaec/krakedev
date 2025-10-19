jugar = function (){
    let aleatorio = lanzarDados();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        //console.log("Es mayor a 3");
        //console.log("Ganaste");
        cambiarTexto("lblResultado","Ganaste");
    }else{
        //console.log("Es menor a 3");
        //console.log("Perdiste");
        cambiarTexto("lblResultado","Perdiste");
    }
}

lanzarDados = function(){
   let aleatorio = Math.random();
   let numeroMultiplicado = aleatorio*6;
   let numeroEntero = parseInt(numeroMultiplicado)+1;
   console.log(numeroEntero); 
   return numeroEntero;
}
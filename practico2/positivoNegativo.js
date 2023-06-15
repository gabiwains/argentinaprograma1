const inputReadLine= require('readline-sync');
let numero=inputReadLine.question("Ingrese un numero: ");
if(numero>0){
    console.log("El numero es positivo");
}else if(numero<0){
    console.log("El numero es negativo");
}else{
    console.log("El numero es 0");
}
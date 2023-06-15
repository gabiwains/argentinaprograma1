const inputReadLine= require('readline-sync');
let numero=inputReadLine.question("Ingrese un numero entero: ");

if((numero>0)&&(numero%2===0)){
console.log("El numero es positivo y par");
}else if((numero>0)&&(numero%2===1)){
console.log("El numero es positivo e impar");
}else if(numero<0){
console.log("El numero es negativo");
}else{
    console.log("El numero es 0");
}
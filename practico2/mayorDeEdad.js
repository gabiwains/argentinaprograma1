const inputReadLine= require('readline-sync');
let edad=inputReadLine.question("Ingrese su edad: ");
if(edad>=18){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}

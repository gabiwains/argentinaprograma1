const inputReadLine= require('readline-sync');
let numero=inputReadLine.question("Ingrese un numero entero entre el 1 y el 7: ");

switch(numero){
    case "1": console.log("Hoy es lunes");
            break;
    case "2": console.log("Hoy es martes");
            break;
    case "3": console.log("Hoy es miercoles");
            break;
    case "4": console.log("Hoy es jueves");
            break;
    case "5": console.log("Hoy es viernes");
            break;
    case "6": console.log("Hoy es sabado");
            break;                
    case "7": console.log("Hoy es domingo");
            break;
    default: console.log("Numero invalido");                
}
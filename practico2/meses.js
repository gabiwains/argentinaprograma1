const inputReadLine= require('readline-sync');
let dias=inputReadLine.question("Ingrese un numro del 1 al 12: ");
let meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto",
"setiembre","octubre","noviembre","dicirmbre"];
let diasMes=[28,30,31];

switch(dias){
case "1":console.log("Elegiste el mes de "+meses[0]+ ". Tiene "+diasMes[2]+" dias.");
       break;
case "2":console.log("Elegiste el mes de febrero. Tiene 28 dias");
       break;
case "3":console.log("Elegiste el mes de marzo. Tiene 31 dias");
       break;
case "4":console.log("Elegiste el mes de abril. Tiene 30 dias");
       break;
case "5":console.log("Elegiste el mes de mayo. Tiene 31 dias");
       break;       
case "6":console.log("Elegiste el mes de junio. Tiene 30 dias");
       break;      
case "7":console.log("Elegiste el mes de julio. Tiene 31 dias");
       break;
case "8":console.log("Elegiste el mes de agosto. Tiene 31 dias");
       break;
case "9":console.log("Elegiste el mes de setiembre. Tiene 30 dias");
       break;
case "10":console.log("Elegiste el mes de octubre. Tiene 31 dias");
       break;
case "11":console.log("Elegiste el mes de noviembre. Tiene 30 dias");
       break;       
case "12":console.log("Elegiste el mes de diciembre. Tiene 31 dias");
       break;     
default:console.log("Numero incorrecto. Ingrese numeros enteros del 1 al 12");       
                
}
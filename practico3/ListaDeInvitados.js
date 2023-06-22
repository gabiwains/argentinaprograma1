let lista=["Jose","Maria","Juan","Andres","Lionel","Sofia","Leandro","Emilia"];
let admitidos=[];
let rechazados=[];

for (let i=0;i<lista.length;i++){
if(lista[i]==="Jose"|| lista[i]==="Sofia"){
    rechazados.push(lista[i]);
}else{
    admitidos.push(lista[i]);
}

    }
console.log("La lista de invitados admitidos es: ");
for (let i=0;i<admitidos.length;i++){
    console.log(admitidos[i]);
}
console.log("La lista de invitados rechazados es: ");
for (let i =0;i<rechazados.length;i++){
    console.log(rechazados[i]);
}
//EXTRA
console.log("La lista ORDENADA de invitados admitidos es: ");
for (let i=0;i<admitidos.length;i++){
    admitidos.sort();
    console.log(admitidos[i]);
}
console.log("La lista ORDENADA de invitados rechazados es: ");
for (let i =0;i<rechazados.length;i++){
    rechazados.sort();
    console.log(rechazados[i]);
}
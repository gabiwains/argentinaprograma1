function obtenerJugadaComputadora() {
  let numaleatorio = Math.floor(Math.random() * 3);
  if (numaleatorio === 0) {
    return "PIEDRA";
  } else if (numaleatorio === 1) {
    return "PAPEL";
  } else {
    return "TIJERAS";
  }
}

function obtenerJugadaUsuario() {
  let flag=false;
  let player;
  const readlineSync = require("readline-sync");
  while(!flag){
    player = readlineSync.question("Indique PIEDRA, PAPEL o TIJERAS para jugar: ");
    if(player==="piedra"|| player==="PIEDRA"||player==="papel"||player==="PAPEL"||player==="tijeras"||player==="TIJERAS"){
      flag=true;
    }else{
      console.log("Dato incorrecto ingreselo nuevamente");
    }
  }
   
  
  return player.toUpperCase();
 
}

function determinarGanador(obtenerJugadaComputadora, obtenerJugadaUsuario) {
  if (obtenerJugadaComputadora === obtenerJugadaUsuario) {
    return "Empate";
  } else if (
    obtenerJugadaComputadora === "PIEDRA" &&
    obtenerJugadaUsuario === "PAPEL"
  ) {
    return "Gano el Jugador!";
  } else if (
    obtenerJugadaComputadora === "PAPEL" &&
    obtenerJugadaUsuario === "TIJERAS"
  ) {
    return "Gano el Jugador!";
  } else if (
    obtenerJugadaComputadora === "TIJERAS" &&
    obtenerJugadaUsuario === "PIEDRA"
  ) {
    return "Gano el Jugador!";
  } else if (
    obtenerJugadaUsuario === "PIEDRA" &&
    obtenerJugadaComputadora === "PAPEL"
  ) {
    return "Gano la Computadora!";
  } else if (
    obtenerJugadaUsuario === "PAPEL" &&
    obtenerJugadaComputadora === "TIJERAS"
  ) {
    return "Gano la Computadora!";
  } else if (
    obtenerJugadaUsuario === "TIJERAS" &&
    obtenerJugadaComputadora === "PIEDRA"
  ) {
    return "Gano la Computadora!";
  }
}

const readlineSync = require("readline-sync");
let cantJugadas = readlineSync.question("cuantas veces quiere jugar? ");
let acumPC = 0;
let acumJugador = 0;
let acumEmpate = 0;
do {
  let jugadaPC = obtenerJugadaComputadora();
  let jugadaJugador = obtenerJugadaUsuario();
  let winner = determinarGanador(jugadaPC, jugadaJugador);

  console.log("La computadora eligio: " + jugadaPC);
  console.log("El jugador eligio : " + jugadaJugador);
  console.log("El resultado fue: " + winner);
  cantJugadas--;
  if (winner === "Gano la Computadora!") {
    acumPC++;
  } else if (winner === "Gano el Jugador!") {
    acumJugador++;
  } else if (winner === "Empate") {
    acumEmpate++;
  }
} while (cantJugadas != 0);
console.log("El Jugador gano " + acumJugador + " veces");
console.log("La Computadora gano " + acumPC + " veces");
console.log("Hubo " + acumEmpate + " empates");
console.log("FIN DEL JUEGO");

var bandera = false; //inicio del juego
var turno = 0;
var tablero = new Array();

window.onload = function () {
  var iniciar = document.getElementById("iniciar");
  iniciar.addEventListener("click", comenzar);
};

function comenzar() {
  bandera = true;
  var player1 = document.getElementById("player1");
  var player2 = document.getElementById("player2");
  if (player1.value == "") {
    alert("Falta el nombre del jugador 1");
    player1.focus();
  } else {
    if (player2.value == "") {
      alert("Falta el nombre del jugador 2");
      player2.focus();
    } else {
      tablero[0] = document.getElementById("b0");
      tablero[1] = document.getElementById("b1");
      tablero[2] = document.getElementById("b2");
      tablero[3] = document.getElementById("b3");
      tablero[4] = document.getElementById("b4");
      tablero[5] = document.getElementById("b5");
      tablero[6] = document.getElementById("b6");
      tablero[7] = document.getElementById("b7");
      tablero[8] = document.getElementById("b8");
      for (let i = 0; i < 9; i++) {
        tablero[i].className = "botonIniciar";
        tablero[i].value = "I";
      }
      turno = 1;
      document.getElementById("turnoPlayer").innerHTML =
        "Adelante jugador " + player1.value;
    }
  }
}

function colocar(boton) {
  if (bandera == true) {
    if (turno == 1 && boton.value == "I") {
      turno = 2;
      document.getElementById("turnoPlayer").innerHTML =
        "Adelante jugador " + player2.value;
      boton.value = "X";
      boton.className = "botonJugador1";
    } else {
      if (turno == 2 && boton.value == "I") {
        turno = 1;
        document.getElementById("turnoPlayer").innerHTML =
          "Adelante jugador " + player1.value;
        boton.value = "O";
        boton.className = "botonJugador2";
      }
    }
  }
  revisar();
}

function revisar() {
  if (
    (tablero[0].value == "X" &&
      tablero[1].value == "X" &&
      tablero[2].value == "X") ||
    (tablero[3].value == "X" &&
      tablero[4].value == "X" &&
      tablero[5].value == "X") ||
    (tablero[6].value == "X" &&
      tablero[7].value == "X" &&
      tablero[8].value == "X") ||
    (tablero[0].value == "X" &&
      tablero[3].value == "X" &&
      tablero[6].value == "X") ||
    (tablero[1].value == "X" &&
      tablero[4].value == "X" &&
      tablero[7].value == "X") ||
    (tablero[2].value == "X" &&
      tablero[5].value == "X" &&
      tablero[8].value == "X") ||
    (tablero[0].value == "X" &&
      tablero[4].value == "X" &&
      tablero[8].value == "X") ||
    (tablero[2].value == "X" &&
      tablero[4].value == "X" &&
      tablero[6].value == "X")
  ) {
    alert("Felicidades ganaste " + player1.value);
    bandera = false;
  }
  if (
    (tablero[0].value == "O" &&
      tablero[1].value == "O" &&
      tablero[2].value == "O") ||
    (tablero[3].value == "O" &&
      tablero[4].value == "O" &&
      tablero[5].value == "O") ||
    (tablero[6].value == "O" &&
      tablero[7].value == "O" &&
      tablero[8].value == "O") ||
    (tablero[0].value == "O" &&
      tablero[3].value == "O" &&
      tablero[6].value == "O") ||
    (tablero[1].value == "O" &&
      tablero[4].value == "O" &&
      tablero[7].value == "O") ||
    (tablero[2].value == "O" &&
      tablero[5].value == "O" &&
      tablero[8].value == "O") ||
    (tablero[0].value == "O" &&
      tablero[4].value == "O" &&
      tablero[8].value == "O") ||
    (tablero[2].value == "O" &&
      tablero[4].value == "O" &&
      tablero[6].value == "O")
  ) {
    alert("Felicidades ganaste " + player2.value);
    bandera = false;
  }
}

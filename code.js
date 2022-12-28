
let playerScore = 0;
let computerScore = 0;
let totalDePuntos = 0;

function choiceComputer() {
  let choice = ["Piedra", "Papel", "Tijeras"];
  let indice = Math.floor(Math.random() * choice.length);
  return choice[indice];
}

function playRound(playerSelection, computerSelection) {
  let result;
  if (playerSelection === computerSelection) {
    result = "Empate!";
  } else if (playerSelection === "Piedra") {
    if (computerSelection === "Tijeras") {
      result = "¡Ganaste!";
      playerScore++;
    } else {
      result = "!Pierdes!";
      computerScore++
    }
  } else if (playerSelection === "Papel") {
    if (computerSelection === "Piedra") {
      result = "¡Ganaste!";
      playerScore++;
    } else {
      result = "!Pierdes!";
      computerScore++
    }
  } else if (playerSelection === "Tijeras") {
    if (computerSelection === "Papel") {
      result = "¡Ganaste!";
      playerScore++;
    } else {
      result = "!Pierdes!";
      computerScore++
    }
  } else {
    result = "Selección inválida";
  }
  return {result,playerScore, computerScore, totalDePuntos};
}

const botonRock = document.getElementById("rock");
const botonPapel = document.getElementById("papel");
const botonTijeras = document.getElementById("tijeras");
const puntosText = document.getElementById("texto-inicio");
const textoComputadora = document.getElementById("texto-computadora");
const textoPlayer = document.getElementById("texto-player");

const totalPuntos = document.getElementById("total-puntos")

let round = 1;

botonRock.addEventListener("click", function () {
  if (round <= 10) {
    const computerChoice = choiceComputer();
    const { result} = playRound("Piedra", computerChoice);
    puntosText.textContent = `${result}`;
    textoComputadora.textContent = `Puntos Computadora = ${computerScore}`
    textoPlayer.textContent = `Tus Puntos =  ${playerScore}`
    round++;
  } else {
    puntosText.textContent = `Fin del juego.`;
    round = 1;
    playerScore = 0;
    computerScore = 0;
  }
});

botonPapel.addEventListener("click", function () {
  if (round <= 10) {
    const computerChoice = choiceComputer();
    const { result} = playRound("Papel", computerChoice);
    puntosText.textContent = `${result}`;
    textoComputadora.textContent = `Puntos Computadora = ${computerScore}`
    textoPlayer.textContent = `Tus Puntos =  ${playerScore}`
    round++;
  } else {
    puntosText.textContent = `Fin del juego.`;
    round = 1;
    playerScore = 0;
    computerScore = 0;
  }
});

botonTijeras.addEventListener("click", function () {
  if (round <= 10) {
    const computerChoice = choiceComputer();
    const { result} = playRound("Tijeras", computerChoice);
    puntosText.textContent = `${result}`;
    textoComputadora.textContent = `Puntos Computadora = ${computerScore}`
    textoPlayer.textContent = `Tus Puntos =  ${playerScore}`
    round++;
  } else {
    puntosText.textContent = `Fin del juego`;
    round = 1;
    playerScore = 0;
    computerScore = 0;
  }
});


//const puntosText = document.querySelector("#puntos #texto-inicio");

/*  function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Elegi piedra, papel o tijeras:");
    let computerSelection = choiceComputer();
    let result = playRound(playerSelection, computerSelection);

    if (result.includes("Ganaste ;)")) {
      playerScore++;
    } else if (result.includes("Perdiste JAJAJA")) {
      computerScore++;
    }

    console.log(result);
  }

  if (playerScore > computerScore) {
    console.log(
      "¡Ganaste la partida con un total de " + playerScore + " puntos!"
    );
  } else if (playerScore < computerScore) {
    console.log(
      "Pecheaste la partida con un total de " + playerScore + " puntos."
    );
  } else {
    console.log("¡Aburrido! Ambos tienen " + playerScore + " puntos.");
  }
} */

//game();

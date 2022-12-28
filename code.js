
let playerScore = 0;
let computerScore = 0;
let totalDePuntos = 0;

function choiceComputer() {
  let choice = ["Piedra", "Papel", "Tijeras"];
  let indice = Math.floor(Math.random() * choice.length);
  return choice[indice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Empate!";
  } else if (playerSelection === "Piedra") {
    if (computerSelection === "tijeras") {
      return "Gana! Piedra vence a tijeras.";
    } else {
      return "Pierde! Papel vence a piedra.";
    }
  } else if (playerSelection === "Papel") {
    if (computerSelection === "piedra") {
      return "Gana! Papel Vence a piedra.";
    } else {
      return "Pierde! Tijeras vence a papel.";
    }
  } else if (playerSelection === "Tijeras") {
    if (computerSelection === "papel") {
      return "Gana! Tijeras vence a papel.";
    } else {
      return "Pierde! Piedra vence a tijeras.";
    }
  } else {
    return "Selección inválida";
  }
}

const botonRock = document.getElementById("rock");
const botonPapel = document.getElementById("papel");
const botonTijeras = document.getElementById("tijeras");
const puntosText = document.getElementById("texto-inicio");

botonRock.addEventListener("click", function () {
  const computerChoice = choiceComputer();
  const result = playRound("Piedra", computerChoice);
  const puntosText = document.querySelector("#puntos #texto-inicio");
  puntosText.textContent = `Elegiste Piedra y la computadora eligió ${computerChoice}. ${result}`;
});

botonPapel.addEventListener("click", function () {
  const computerChoice = choiceComputer();
  const result = playRound("Papel", computerChoice);
  const puntosText = document.querySelector("#puntos #texto-inicio");
  puntosText.textContent = `Elegiste Papel y la computadora eligió ${computerChoice}. ${result}`;
});

botonTijeras.addEventListener("click", function () {
  const computerChoice = choiceComputer();
  const result = playRound("Tijeras", computerChoice);
  const puntosText = document.querySelector("#puntos #texto-inicio");
  puntosText.textContent = `Elegiste Tijeras y la computadora eligió ${computerChoice}. ${result}`;
});

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

function choiceComputer() {
  let choice = ["Piedra", "Papel", "Tijera"];
  let indice = Math.floor(Math.random() * choice.length);
  return choice[indice];
}
/* let choice = choiceComputer()
  console.log(choice) */

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Empate!";
  } else if (playerSelection === "piedra") {
    if (computerSelection === "tijeras") {
      return "Ganas! Piedra vence a tijeras.";
    } else {
      return "Pierdes! Papel vence a piedra.";
    }
  } else if (playerSelection === "papel") {
    if (computerSelection === "piedra") {
      return "Ganas! Papel vence a piedra.";
    } else {
      return "Pierdes! Tijeras vencen a papel.";
    }
  } else if (playerSelection === "tijeras") {
    if (computerSelection === "papel") {
      return "Ganas! Tijeras vencen a papel.";
    } else {
      return "Pierdes! Piedra vence a tijeras.";
    }
  } else {
    return "No existe";
  }
}

/*   const playerSelection = "piedra";
  const computerSelection = choiceComputer();
  console.log(playRound(playerSelection, computerSelection));  */

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Elige piedra, papel o tijeras:");
    let computerSelection = choiceComputer();
    let result = playRound(playerSelection, computerSelection);

    if (result.includes("Ganas")) {
      playerScore++;
    } else if (result.includes("Pierdes")) {
      computerScore++;
    }

    console.log(result);
  }

  if (playerScore > computerScore) {
    console.log(
      "¡Ganas la partida con un total de " + playerScore + " puntos!"
    );
  } else if (playerScore < computerScore) {
    console.log(
      "Pierdes la partida con un total de " + playerScore + " puntos."
    );
  } else {
    console.log("¡Empate! Ambos tienen " + playerScore + " puntos.");
  }
}

game();
function choiceComputer() {
    let choice = ["Piedra", "Papel", "Tijera"];
    let indice = Math.floor(Math.random() * choice.length);
    return choice[indice];
  }
  /* let choice = choiceComputer()
  console.log(choice) */
  
  function oneRound(playerSelection, computerSelection) {
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
      return "Entrada inválida";
    }
  }
  
  const playerSelection = "piedra";
  const computerSelection = choiceComputer();
  console.log(oneRound(playerSelection, computerSelection));
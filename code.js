/* const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'Esta es mi primera vez no entiendo nada'
container.appendChild(content);

const textoRed = document.getElementById('texto-red')
textoRed.innerHTML = 'soy rojo!'
textoRed.style.color = "red"


const textoAzul = document.getElementById('soy-azul');
textoAzul.innerHTML = 'soy azul!'
textoAzul.style.color = 'blue'

const containerOne= document.createElement('div');
const header = document.createElement('h1');
header.innerHTML = 'Estoy dentro de un Div';
containerOne.style.border = '1px solid black';
containerOne.appendChild(header)
document.body.appendChild(containerOne);
const parrafo = document.createElement('p');
parrafo.innerHTML = 'Yo tambien';

parrafo.style.backgroundColor = 'pink'
containerOne.appendChild(parrafo);
document.body.appendChild(containerOne)


const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert('Hello World!') 
})

btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
}); */

/* <script>
  const container = document.createElement('div');
  const header = document.createElement('h1');
  header.innerHTML = 'estoy en un div';
  container.style.border = '1px solid black';
  container.style.backgroundColor = 'pink';
  container.appendChild(header);
  document.body.appendChild(container);
</script> */


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
      return "Ganaste! Piedra vence a tijeras.";
    } else {
      return "Perdiste! Papel vence a piedra.";
    }
  } else if (playerSelection === "papel") {
    if (computerSelection === "piedra") {
      return "Ganaste! Papel Vence a piedra.";
    } else {
      return "Perdiste! Tijeras vence a papel.";
    }
  } else if (playerSelection === "tijeras") {
    if (computerSelection === "papel") {
      return "Ganaste! Tijeras vence a papel.";
    } else {
      return "anda pa ya BOBO!! Piedra vence a tijeras.";
    }
  } else {
    return "anda pa ya BOBO!";
  }
}

/*   const playerSelection = "piedra";
  const computerSelection = choiceComputer();
  console.log(playRound(playerSelection, computerSelection));  */

function game() {
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
}

//game();


//creando div.
var resultadosDiv = document.createElement('div');
//agregando div al dom
document.body.appendChild(resultadosDiv);

//creando botones.
var buttonRock = document.createElement('button')
var buttonPaper = document.createElement('button')
var buttonScissors = document.createElement('button')

//este es el texto de cada boton.
buttonRock.textContent = "piedra";
buttonPaper.textContent = "papel";
buttonScissors.textContent = "tijeras";

//agregando eventos a los botones.
buttonRock.addEventListener('click', function(){
var resultado = playRound("Piedra", choiceComputer());
resultadosDiv.textContent = resultado
});

buttonPaper.addEventListener('click', function(){
  var resultado = playRound("Piedra", choiceComputer());
  resultadosDiv.textContent = resultado
});


buttonScissors.addEventListener('click', function(){
var resultado = playRound("Tijeras", choiceComputer());
resultadosDiv.textContent = resultado
});

//agregando al dom.

document.body.appendChild(buttonRock);
document.body.appendChild(buttonPaper);
document.body.appendChild(buttonScissors);


//esto es para mostrar los resultados en un div.



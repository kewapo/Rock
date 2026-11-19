// Project: Rock Paper Scissors

// SCORES
let humanScore = 0;
let computerScore = 0;
let round = 1;
let humanChoice;
let computerChoice;

//OPTIONS
const OPTIONS = {
  0: "Rock",
  1: "Paper",
  2: "Scissors",
};

// WHO BEATS WHOM
const WINS_TO = {
  0: 2, // Rock (0) wins to Scissors (2)
  1: 0, // Paper (1) win to Rock (0)
  2: 1, // Scissors (2) wins to Paper (1)
};

let rnd = 1;
// Choose Rock=0, Paper=1, Scissors=2
function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

// Ask user
function getHumanChoice() {
  do {
    humanChoice = prompt(`Choose:
            0: Rock
            1: Paper
            2: Scissors`);
  } while (isNaN(humanChoice) || humanChoice < 0 || humanChoice > 2);
  return humanChoice;
}


// Play a round
function playRound(humanChoice, computerChoice) {
  if (WINS_TO[humanChoice] == computerChoice) {
    humanScore += 1;
    return `You win! ${OPTIONS[humanChoice]} beats ${OPTIONS[computerChoice]}`;
  } else if (WINS_TO[computerChoice] == humanChoice) {
    computerScore += 1;
    return `You loose! ${OPTIONS[computerChoice]} beats ${OPTIONS[humanChoice]}`;
  } else return "Tie!";
}

function mensajeNavegador(m1, m2) {
    const messages = document.querySelector("#messages");
    const ronda = document.createElement("p");
    const linea = document.createElement("hr");
    const resultado = document.createElement("p");
    ronda.textContent = m1;
    resultado.textContent = m2;
    messages.appendChild(ronda);
    messages.appendChild(resultado);
    messages.appendChild(linea);
}

// Play the game
function play(humanChoice) {
    if (rnd<6) {
    // Choose an option
    computerChoice = getComputerChoice();
    let resultadoRonda = playRound(humanChoice, computerChoice);
    let mensajeMarcador = `Human: ${humanScore} | Computer: ${computerScore}`;
    mensajeNavegador(`Ronda ${rnd} `, 
            `Computer choice: ${OPTIONS[computerChoice]} | Your choice: ${OPTIONS[humanChoice]}
            ${resultadoRonda}
            ${mensajeMarcador}`);
    rnd += 1
    } else {
      document.getElementById("rock").disabled = true;
      document.getElementById("paper").disabled = true;
      document.getElementById("scissors").disabled = true;
      alert("FIN DEL JUEGO")
    }
    
}

// Starting the game
//play()

document.getElementById("rock")
        .addEventListener("click", () => play(0));

document.getElementById("paper")
        .addEventListener("click", () => play(1));

document.getElementById("scissors")
        .addEventListener("click", () => play(2));
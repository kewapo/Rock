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
    2: "Scissors"
}

// WHO BEATS WHOM
const WINS_TO = {
    0: 2, // Rock (0) wins to Scissors (2)
    1: 0, // Paper (1) win to Rock (0)
    2: 1  // Scissors (2) wins to Paper (1)
}

// Choose Rock=0, Paper=1, Scissors=2
function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}

// Ask user
function getHumanChoice() {
    do {
        humanChoice = prompt(`Choose:
            0: Rock
            1: Paper
            2: Scissors`);
    } while (isNaN(humanChoice) || humanChoice<0 || humanChoice>2);
    return humanChoice;
}

// Play a round
function playRound(humanChoice, computerChoice) {
    if (WINS_TO[humanChoice] == computerChoice) {
        humanScore += 1
        return `You win! ${OPTIONS[humanChoice]} beats ${OPTIONS[computerChoice]}`
    } else if (WINS_TO[computerChoice] == humanChoice) {
        computerScore += 1
        return `You loose! ${OPTIONS[computerChoice]} beats ${OPTIONS[humanChoice]}`
    } else return 'Tie!'
}

// Play the game
function play() {
    for(round = 1; round < 6; round++) {
        // Choose an option
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        let resultadoRonda = playRound(humanChoice, computerChoice);
        let mensajeMarcador = `Human: ${humanScore} | Computer: ${computerScore}`;
        alert(`ROUND ${round}
            Computer choice: ${OPTIONS[computerChoice]} | Your choice: ${OPTIONS[humanChoice]}
            ${resultadoRonda}
            ${mensajeMarcador}`);
        console.log(`ROUND ${round}
            Computer choice: ${OPTIONS[computerChoice]} | Your choice: ${OPTIONS[humanChoice]}
            ${resultadoRonda}
            ${mensajeMarcador}`)    
    }
}

// Starting the game
play()



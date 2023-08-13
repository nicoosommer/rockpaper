let playerScore = 0;
let pcScore = 0;

const rock = document.getElementById("ROCK");
const paper = document.getElementById("PAPER");
const scissor = document.getElementById("SCISSOR");
const resultado = document.querySelector(".resultado");
const ops = ["ROCK", "PAPER", "SCISSOR"];
const pcPuntos = document.querySelector(".pcPuntos");
const playerPuntos = document.querySelector(".playerPuntos");
const restart = document.getElementById("restart");

function getComputerChoice() {
  return ops[Math.floor(Math.random() * ops.length)];
}

function playRound(player, pc) {
  if (player === pc) {
    resultado.textContent = `This round is a tie!You both chose ${player}`;
  } else if (
    (player === "ROCK" && pc === "PAPER") ||
    (player === "PAPER" && pc === "SCISSOR") ||
    (player === "SCISSOR" && pc === "ROCK")
  ) {
    pcScore++;
    resultado.textContent = `You lost this round! ${pc} beats ${player}`;
  } else {
    playerScore++;
    resultado.textContent = `You won this round! ${player} beats ${pc}`;
  }
  pcPuntos.textContent = pcScore;
  playerPuntos.textContent = playerScore;
  gameFinished(playerScore, pcScore);
}

function gameFinished(player, pc) {
  if (player == 5 || pc == 5) {
    pcPuntos.textContent = 0;
    playerPuntos.textContent = 0;
    playerScore = 0;
    pcScore = 0;
    if (player > pc) {
      resultado.textContent = `You win! ${player} to ${pc}`;
    } else {
      resultado.textContent = `The pc wins! ${pc} to ${player}`;
    }
  }
}
function restartGame() {
  pcPuntos.textContent = "?";
  playerPuntos.textContent = "?";
  resultado.textContent = "The game hasn't started yet!";
}
restartGame();
function userChoice(e) {
  const eleccionJug = e.target.id;
  playRound(eleccionJug, getComputerChoice());
}

rock.addEventListener("click", userChoice);
paper.addEventListener("click", userChoice);
scissor.addEventListener("click", userChoice);
restart.addEventListener("click", restartGame);

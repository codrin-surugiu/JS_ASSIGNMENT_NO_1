//Rock Paper Scissors

const computerPlay = () => {
  const options = ["rock", "paper", "scissors"];
  const result = options[Math.floor(Math.random() * 3)];

  return result;
};

const playround = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) return "tie";

  if (playerSelection === "rock")
    return computerSelection === "scissors" ? "userWins" : "computerWins";

  if (playerSelection === "paper")
    return computerSelection === "rock" ? "userWins" : "computerWins";

  if (playerSelection === "scissors")
    return computerSelection === "paper" ? "userWins" : "computerWins";
};

const computerSelection = computerPlay();
const playerSelection = "rock";
const result = playround(playerSelection, computerSelection);

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const playerSelection = prompt("Rock, paper, or scissors?");
    const result = playround(playerSelection, computerSelection);

    result === "userWins" ? playerScore++ : computerScore++;
    console.log(result);
  }

  console.log(`Player: ${playerScore} Computer: ${computerScore}`);
  playerScore === computerScore && console.log("It's a tie!");
  console.log(playerScore > computerScore ? "You win!" : "Computer wins");
};

game();

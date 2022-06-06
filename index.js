//Square Diagonal
const computeDiagonal = (diagonal) => {
  return diagonal * Math.sqrt(2);
};

//Triangle area using Heron's formula
const computeTriangleArea = (x, y, z) => {
  const semiPeremeter = (x + y + z) / 2;

  //Heron's formula
  const triangleArea = Math.sqrt(
    semiPeremeter *
      (semiPeremeter - x) *
      (semiPeremeter - y) *
      (semiPeremeter - z)
  );
  return triangleArea;
};

//Circle circumference and area calculation
const computeCircleCalc = (radius) => {
  const circle = {
    circumference: 2 * Math.PI * radius,
    surfaceArea: Math.PI * Math.pow(radius, 2),
  };

  return circle;
};

const largestOfTwo = (a, b) => {
  console.log(a > b ? a : b);
};

const oddEven = (number) => {
  console.log(number % 2 === 0 ? "even" : "odd");
};

let squareDiagonal = computeDiagonal(9);
console.log(squareDiagonal);

let triangleArea = computeTriangleArea(5, 6, 7);
console.log(triangleArea);

let circle = computeCircleCalc(4);
console.log(circle);

largestOfTwo(2, 3);
oddEven(3);

//-----------------------------------------------
//Rock Paper Scissors

const computerPlay = () => {
  const options = ["rock", "paper", "scissors"];
  const result = options[Math.floor(Math.random() * 3)];

  return result;
};

const playround = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) return "tie";

  if (playerSelection === "rock") {
    return computerSelection === "scissors" ? "userWins" : "computerWins";
  }

  if (playerSelection === "paper") {
    return computerSelection === "rock" ? "userWins" : "computerWins";
  }

  if (playerSelection === "scissors") {
    return computerSelection === "paper" ? "userWins" : "computerWins";
  }
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

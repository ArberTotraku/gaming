const rs = require("readline-sync");

function game() {
  const array = ["rock", "paper", "scissors"];

  let item = array[Math.floor(Math.random() * array.length)];
  console.log("random guess:", item);
  return item;
}

console.log(game("Item 1:"));

function printInstructions() {
  const answer = rs.question("Do you want to see the instructions? (yes/no)");
  if (answer === "yes") {
    console.log("This game is the game of Rock Papers Scissors\nGood luck!");
  } else {
    console.log("OK , let's go then!");
  }
}
function startGame() {
  printInstructions();
  let tool = game();

  getUserInput(tool);
  game();
}

let playerCount = 0;
let computerCount = 0;

function getUserInput(tool) {
  let guess;
  do {
    guess = rs.question("Type Rock or Paper or Scissors and press enter:\n");

    if (guess === tool) {
      console.log("It's a tie");

      let playAgain = rs.question(
        "Do you want to play another round? (yes/no)"
      );
      if (playAgain === "yes") {
        console.log("New game");
        startGame();
      } else {
        console.log("Thanks for playing!\nBye!");
        console.log(
          `Your points: ${playerCount} \n Computer points: ${computerCount} `
        );
      }
    }
    if (guess === "scissors" && tool === "paper") {
      console.log("You win scissors cut paper");
      playerCount += 1;
    }
    if (guess === "paper" && tool === "scissors") {
      console.log("You lose scissors cut paper");
      computerCount += 1;
    }
    if (guess === "rock" && tool === "scissors") {
      console.log("You win rock breaks scissors");
      playerCount += 1;
    }
    if (guess === "scissors" && tool === "rock") {
      console.log("You lose rock breaks scissors");
      computerCount += 1;
    }
    if (guess === "rock" && tool === "paper") {
      console.log("You win paper fills rock");
      playerCount += 1;
    }
    if (guess === "paper" && tool === "rock") {
      console.log("You lose paper fills rock");
      computerCount += 1;
    }

    let playMore = rs.question("Do you want to play another round? (yes/no)");
    if (playMore === "yes") {
      console.log("New game");
      startGame();
    } else {
      console.log("Thanks for playing!\nBye!");
      console.log(
        `Your points: ${playerCount} \n Computer points: ${computerCount} `
      );
    }

    process.exit();
  } while (guess !== tool);
}

startGame();

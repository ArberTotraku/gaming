const rs = require("readline-sync");

function game1() {
  const array = ["red", "black"];

  let item = array[Math.floor(Math.random() * array.length)];
  console.log("random guess:", item);
  return item;
}

function introduction() {
  let name = rs.question("Welcome to my game,what is your name?");
  let bet = rs.question(` Hi ${name} how much do you want to bet `);
  let bettingScore = rs.question(` Do you really want to bet ${bet}?`);
  if (bettingScore === "yes") {
    playerCredit = bet;
    console.log(`Ok ${name} your credit is ${playerCredit}`);
  }
}

function printInstructions1() {
  const answer = rs.question("Do you want to see the instructions? (yes/no)");
  if (answer === "yes") {
    console.log("You should bet on Red or Black\nGood luck!");
  } else {
    console.log("OK , let's go then!");
  }
}

function startGame1() {
  introduction();
  printInstructions1();
  let tool = game1();

  getUserInput1(tool);
  game1();
}

function startGameWithout() {
  printInstructions1();
  let tool = game1();
  getUserInput1(tool);
  game1();
}

let playerCredit = 0;
let computerCredit = 0;

function getUserInput1(tool) {
  let guess;
  do {
    guess = rs.question("Type Red or Black and press enter:\n");

    if (guess === "red" && tool === "red") {
      console.log("Congrats,you won 5€");
      playerCredit += 5;
    }
    if (guess === "black" && tool === "black") {
      console.log("Congrats,you won 5€");
      playerCredit += 5;
    }
    if (guess === "red" && tool === "black") {
      console.log("Sorry you lost 5.5€");
      playerCredit -= 5.5;
    }
    if (guess === "black" && tool === "red") {
      console.log("Sorry you lost 5.5€");
      playerCredit -= 5.5;
    }

    if (playerCredit <= 5.5) {
      console.log(
        `Sorry,your credit is ${playerCredit}€ \nyou have to add more in order to play`
      );

      let addMore = rs.question("Do you want to add more?");
      if (addMore === "yes") {
        let addAgain = Number(
          rs.question("How much do you want to add this time?")
        );
        let total = playerCredit + addAgain;
        console.log(total);
        console.log(`Alright boss,your credit is: ${total}`);
      } else {
        console.log(`Better luck next time,boss`);
        process.exit();
      }
    }

    let playAgain = rs.question("Do you want to play another round? (yes/no)");
    if (playAgain === "yes") {
      console.log("New game");
      startGame1();
    } else {
      console.log("Thanks for playing!\nBye!");
      console.log(`Your credit is ${playerCredit} `);
    }

    process.exit();
  } while (guess !== tool);
}

startGame1();

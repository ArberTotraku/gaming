const rs = require("readline-sync");

function game1() {
  const array = ["red", "black"];

  let item = array[Math.floor(Math.random() * array.length)];
  console.log("random guess:", item);
  return item;
}

let name = "";

function introduction() {
  name = rs.question("Welcome to my game,what is your name?");
  bet = Number(
    rs.question(` Hi ${name} how much do you want to bet? (Min=10€) `)
  );
}

let bet;

function getBet() {
  if (bet < 10) {
    console.log(`Min 10€ please,we're a big casino!`);
    let questionForMoney = rs.question("Would you like to add some more?");
    if (questionForMoney === "yes") {
      let doubt = Number(rs.question("How much then?"));
      bet = doubt;
    } else {
      console.log("Sorry we don't accept small cash on our home");
      process.exit();
    }
    let bettingScore = rs.question(` Do you really want to bet ${bet}€?`);
    if (bettingScore === "yes") {
      console.log(`Ok ${name} your credit is ${bet}€`);
    }
  }
  return bet;
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
  getBet();

  printInstructions1();

  let tool = game1();

  getUserInput1(tool, bet);
  game1();
}

function startGameWithout() {
  getBet();

  printInstructions1();

  let tool1 = game1();
  getUserInput1(tool1, bet);
  game1();
}

let playerCredit = 0;

function getUserInput1(tool, bet) {
  let guess;

  do {
    guess = rs.question("Type Red or Black and press enter:\n");
    playerCredit = bet;
    if (guess === tool) {
      console.log("Congrats,you won 5€");
      playerCredit += 5;
      console.log(playerCredit);
    }
    if (guess === "red" && tool === "black") {
      console.log("Sorry you lost 5.5€");
      playerCredit -= 5.5;
      console.log(playerCredit);
    }
    if (guess === "black" && tool === "red") {
      console.log("Sorry you lost 5.5€");
      playerCredit -= 5.5;
      console.log(playerCredit);
    } else if (playerCredit <= 5.5) {
      console.log(
        `Sorry,your credit is ${playerCredit}€ \nyou have to add more in order to play`
      );

      let addMore = rs.question("Do you want to add more?");
      if (addMore === "yes") {
        let addAgain = Number(
          rs.question("How much do you want to add this time?")
        );
        let total = Number(playerCredit) + Number(addAgain);

        console.log(`Alright ${name},your credit is: ${total}`);
      } else {
        console.log(`Better luck next time,${name},Gamble responsibly please!`);
        process.exit();
      }
    }

    let playAgain = rs.question("Do you want to play another round? (yes/no)");
    if (playAgain === "yes") {
      console.log("New game");
      startGameWithout();
    } else {
      console.log("Thanks for playing!\nBye!");
      console.log(`Your credit is ${playerCredit} `);
    }

    process.exit();
  } while (tool !== game1 && playerCredit <= 5.5);
}
startGame1();

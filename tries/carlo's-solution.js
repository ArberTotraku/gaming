const rs = require("readline-sync");
let nameOfPlayer = "";
function chooseGame() {
  nameOfPlayer = rs.question("Hi,how I can call you?");

  let chooseAGame = rs.question(
    `Welcome to Totraku Gaming dear ${nameOfPlayer},you can choose a number to play: \n1.Casino Game\n2.Rock Paper Scissors`
  );
  if (chooseAGame === "1") {
    startGame1();
  }
  if (chooseAGame === "2") {
    startGame();
  }
}

// FIRST GAME ...

// ROCK PAPER SCISSORS

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
      console.log("You lose paper fills rock");
      computerCount += 1;
    }
    if (guess === "paper" && tool === "rock") {
      console.log("You win paper fills rock");
      playerCount += 1;
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
    playMoreGames();
    // process.exit();
  } while (guess !== tool);
}

// END OF FIRST GAME

// Beginning of the SECOND GAME

// Casino Game Red and Black

function game1() {
  const array = ["red", "black"];

  let item = array[Math.floor(Math.random() * array.length)];
  console.log("random guess:", item);
  return item;
}

let playerCredit;
function introduction() {
  //   name = rs.question("Welcome to my game,what is your name?");
  playerCredit = Number(
    rs.question(` Hi ${nameOfPlayer} how much do you want to bet? (Min=10€) `)
  );
}

let bettingScore;

function getPlayerCredit() {
  if (playerCredit < 10) {
    console.log(`Min 10€ please,we're a big casino!`);
    let questionForMoney = rs.question("Would you like to add some more?");
    if (questionForMoney === "yes") {
      playerCredit = Number(rs.question("How much then?"));
    } else {
      console.log("Sorry we don't accept small cash on our home");
      process.exit();
    }
    bettingScore = rs.question(` Do you really want to bet ${playerCredit}€?`);
    if (bettingScore === "yes") {
      console.log(`Ok ${nameOfPlayer} your credit is ${playerCredit}€`);
    }
  }
  // return playerCredit;
}

function printInstructions1() {
  const answer = rs.question("Do you want to see the instructions? (yes/no)");
  if (answer === "yes") {
    console.log(
      "You should bet on Red or Black\nIf you find the color you win 5€,if you don't, you lose 5.5€\nGood luck!"
    );
  } else {
    console.log("OK , let's go then!");
  }
}

function startGame1() {
  introduction();
  getPlayerCredit();

  printInstructions1();

  let tool = game1();

  getUserInput1(tool);
  game1();
}

function startGameWithout() {
  getPlayerCredit();

  printInstructions1();

  let tool1 = game1();
  getUserInput1(tool1, playerCredit);
  game1();
}

function getUserInput1(tool) {
  let guess;

  do {
    guess = rs.question("Type Red or Black and press enter:\n");

    if (guess === tool) {
      console.log("Congrats,you won 5€");
      playerCredit += 5;
      console.log(playerCredit);
    } else {
      console.log("Sorry you lost 5.5€");
      playerCredit -= 5.5;
      console.log(playerCredit);
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
        playerCredit = Number(playerCredit) + Number(addAgain);

        console.log(`Alright ${nameOfPlayer},your credit is: ${playerCredit}`);
      } else {
        console.log(
          `Better luck next time ${nameOfPlayer}.\nGamble responsibly please!`
        );
        // process.exit();
        playMoreGames();
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

    // process.exit();
    playMoreGames();
  } while (tool !== game1 && playerCredit <= 5.5);
}

// End of SECOND GAME

function playMoreGames() {
  let playMoreGame = rs.question("Do you want to turn back to the menu?");
  if (playMoreGame === "no") {
    let sure = rs.question("Are you sure? HIHI");
    if (sure === "yes") {
      console.log("Bye my love");
      process.exit();
    } else {
      chooseGame();
    }
  }
  if (playMoreGame === "yes") {
    let theQuestion = rs.question(
      "Choose a number or exit to exit\n1.Casino game\n2.Rock Paper Scissors\n 3.exit"
    );
    if (theQuestion === "1") {
      startGame1();
    }
    if (theQuestion === "2") {
      startGame();
    }
    if (theQuestion === "exit") {
      console.log(`Thanks for playing with Totraku Gaming,see you soon`);
      process.exit();
    }
  }
}
chooseGame();
playMoreGames();
// startGame();
// startGame1();

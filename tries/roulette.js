const rs = require("readline-sync");

let nameOfPlayer1 = rs.question(
  "Welcome to our deadly game.We wish you good luck! Type your name first and press Enter"
);

function game2() {
  const array = [
    "shoot",
    "no-shoot",
    "no-shoot",
    "no-shoot",
    "no-shoot",
    "no-shoot",
  ];
  let player1game = array[Math.floor(Math.random() * array.length)];
  console.log("random guess:", player1game);
  if (player1game === "shoot") {
    console.log(`Oops RIP ${nameOfPlayer1}`);
  } else {
    console.log("You survived this time");
  }
}
game2();

const rs = require("readline-sync");

// function game3(...string) {
//   let allPlayers = [];
//   const numbersOfPlayer = rs.question("Add number of the players");
//   string = [];
//   for (let i = 1; i <= numbersOfPlayer; i++) {
//     let naming = rs.question(`Type the name of the player ${i}.`);

//     numbersOfPlayer[i].push(string);
//     console.log(string);
//   }
//   return string;
// }

// game3();
const gaming = {
  create: (createNewPlayer = (number, name) => {
    let numbersOfPlayer = rs.question(
      "How many friends are on the table? Please type a number"
    );
    let players = [];
    for (let i = 1; i <= numbersOfPlayer; i++) {
      const nameOfThePlayers = rs.question(`Type the name of the player ${i}.`);

      number = i;
      name = nameOfThePlayers;
    }
    let whoIsPaying = name[Math.floor(Math.random() * name.length)];
    console.log("The player who is paying is:", number, whoIsPaying);
  }),
};

createNewPlayer();

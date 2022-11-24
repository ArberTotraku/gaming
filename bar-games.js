const rs = require("readline-sync");

function allPlayersOfTheGame(...string) {
  const numbersOfPlayer = rs.question(
    "How many friends are on the table? Please type a number"
  );

  for (let i = 1; i <= numbersOfPlayer; i++) {
    const nameOfThePlayers = rs.question(`Type the name of the player ${i}.`);
    allPlayers = [...nameOfThePlayers];
    console.log(`Player no ${i} is: ${nameOfThePlayers}`);
    string.push(allPlayers);

    const array = [allPlayers].concat(":");
    console.log(array);
    let whoIsPaying = array[Math.floor(Math.random() * array.length)];
    console.log(whoIsPaying);
    console.log("random guess:", whoIsPaying);
    payment();
    pay: function payment() {
      let ready = rs.question("Are you ready to pay?");
      if (ready === "yes") {
        console.log("So the number of player who will pay isss:", whoIsPaying);
      }
    }
  }
}

allPlayersOfTheGame();

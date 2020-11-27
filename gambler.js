let readline = require('readline');
let readInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var arrayOfInputs = 0;
//for multiple input
readInput.question("Enter amount and goal gambling: ", function (input) {
    arrayOfInputs = input.trim().split(' ');
    // console.log(arrayOfInputs[1]);
    readInput.close();
    var amount = parseInt(arrayOfInputs[0]);
    let goal = parseInt(arrayOfInputs[1]);
    let bets = 0;
    let wins = 0;
    let loss = 0;
    let cash = amount;

    while ((cash > 0) && (cash < goal)) {
        bets += 1;
        randomNumber = Math.floor(Math.random() * 2);
        if (randomNumber == 1) {
            cash += 1;
            wins += 1;
        } else {
            cash -= 1;
            loss += 1;
        }
    }

    console.log("Wins: ", wins, " loss: ", loss, " Bets: ", bets);

});
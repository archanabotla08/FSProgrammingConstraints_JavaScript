Heads = 0;
Tails = 0;
flips = 0;
while (true) {
    randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber == 1)
        Heads += 1;
    else
        Tails += 1;
    flips += 1;
    if ((Heads == 11) || (Tails == 11)) {
        break;
    } else {
        continue;
    }
}

console.log("Heads: ", Heads, " Tails: ", Tails, " Number of flips: ", flips);
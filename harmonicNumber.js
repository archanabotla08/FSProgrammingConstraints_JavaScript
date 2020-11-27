const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the terms ?', input => {
    readline.close();
    let harmonic = 1;
    console.log(harmonic);
    let numberOfTerms = parseInt(input);
    for (i = 2; i <= numberOfTerms; i++) {
        let result = 1.00 / i;
        harmonic = harmonic + result;
        console.log(harmonic);
    }

});
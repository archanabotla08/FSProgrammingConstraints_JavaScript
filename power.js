const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the power ?', input => {
    readline.close();
    let sum = 0;
    let power = parseInt(input);
    for (i = 1; i <= ((2 ** power)); i++) {
        sum = 2 * i
        console.log("power: 2 * ", i, " = ", sum);
    }

});
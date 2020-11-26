const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Provide as Factor of 10 ?', input => {
    readline.close();
    if (input == 1) {
        console.log(input, ":units");
    } else if (input == 10) {
        console.log(input, ":tens");
    } else if (input == 100) {
        console.log(input, ":hundred");
    } else if (input == 1000) {
        console.log(input, ":thousand");
    } else if (input == 10000) {
        console.log(input, ":ten thousand");
    } else if (input == 100000) {
        console.log(input, ":lakh");
    } else if (input >= 1000000) {
        console.log("Only Program Designed Till 10 to power of 5");
    } else {
        console.log("Invalid Number");
    }
});
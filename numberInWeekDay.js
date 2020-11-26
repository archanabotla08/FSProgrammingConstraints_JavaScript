const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter Number from 0 - 6 to get week day?', input => {
    readline.close();
    if (input == 0) {
        console.log(input, ":Sunday");
    } else if (input == 1) {
        console.log(input, ":Monday");
    } else if (input == 2) {
        console.log(input, ":Tuesday");
    } else if (input == 3) {
        console.log(input, ":Wednesday");
    } else if (input == 4) {
        console.log(input, ":Thursday");
    } else if (input == 5) {
        console.log(input, ":Friday");
    } else if (input == 6) {
        console.log(input, ":Saturday");
    } else {
        console.log("Invalid Number");
    }
});
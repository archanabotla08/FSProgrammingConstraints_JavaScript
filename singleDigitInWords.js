const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter One digit Number?', input => {
    readline.close();
    if (input == 0) {
        console.log(input, ":Zero");
    } else if (input == 1) {
        console.log(input, ":One");
    } else if (input == 2) {
        console.log(input, ":Two");
    } else if (input == 3) {
        console.log(input, ":Three");
    } else if (input == 4) {
        console.log(input, ":Four");
    } else if (input == 5) {
        console.log(input, ":Five");
    } else if (input == 6) {
        console.log(input, ":Six");
    } else if (input == 7) {
        console.log(input, ":Seven");
    } else if (input == 8) {
        console.log(input, ":Eight");
    } else if (input == 9) {
        console.log(input, ":Nine");
    } else {
        console.log("Not Single Digit Number");
    }
});
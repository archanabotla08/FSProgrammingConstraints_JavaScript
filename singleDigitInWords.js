const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter Single Digit Number 0-9 ?', input => {
    readline.close();
    let x = parseInt(input);
    switch (x) {
        case 0:
            console.log(input, ":Zero");
            break;
        case 1:
            console.log(input, ":One");
            break;
        case 2:
            console.log(input, ":Two");
            break;
        case 3:
            console.log(input, ":Three");
            break;
        case 4:
            console.log(input, ":Four");
            break;
        case 5:
            console.log(input, ":Five");
            break;
        case 6:
            console.log(input, ":Six");
            break;
        case 7:
            console.log(input, ":Seven");
            break;
        case 8:
            console.log(input, ":Eight");
            break;
        case 9:
            console.log(input, ":Nine");
            break;

        default:
            console.log("Invalid Number (Not a Single Digit Number)");
            break;
    }
});




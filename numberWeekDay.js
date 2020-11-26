const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter Number Between 0 - 6 ?', input => {
    readline.close();
    let x = parseInt(input);
    switch(x) {
    case 0:
        console.log(input,": Sunday")
        break;
    case 1:
        console.log(input, ":Monday");
        break;
    case 2:
        console.log(input, ":Tuesday");
        break;
    case 3:
        console.log(input, ":Wednesday");
        break;
    case 4:
        console.log(input, ":Thursday");
        break;
    case 5:
        console.log(input, ":Friday");
        break;
    case 6:
        console.log(input,": Saturday");
        break;
    default:
        console.log("Invalid Number");
        break;
    }
});




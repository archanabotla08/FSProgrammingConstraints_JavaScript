const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Provide as Factor of 10 ?', input => {
    readline.close();
    let x = parseInt(input);
    switch(x) {
    case 1:
        console.log(input,":units");
        break;
    case 10:
        console.log(input, ":tens");
        break;
    case 100:
        console.log(input, ":hundred");
        break;
    case 1000:
        console.log(input, ":thousand");
        break;
    case 10000:
        console.log(input, ":ten thousand");
        break;
    case 100000:
        console.log(input, ":lakh");
        break;
    case (input >= 1000000):
        console.log("Only Program Designed Till 10 to power of 5");
        break;
    default:
        console.log("Invalid Number");
        break;
    }
});




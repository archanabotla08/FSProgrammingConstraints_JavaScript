const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the terms ?', input => {
    readline.close();
    let number = parseInt(input);
    let flag = 0;
    let temp = number / 2;
    for (i = 2; i <= temp; i++) {
        if ((number % i) == 0) {
            console.log(number, " is Not Prime Number");
            flag = 1;
            break;
        }
    }
    if (number == 1) {
        console.log(number, " is not prime Number");
    } else if (flag == 0) {
        console.log(number, " is Prime Number");
    }
});
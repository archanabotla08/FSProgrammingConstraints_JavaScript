const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the integer ?', input => {
    readline.close();
    let factorial = 1;
    if (input == 0)
        console.log("Error !! Factorial of negative number doesn't exist");
    else
        for (i = 1; i <= input; i++) {
            factorial = factorial * i;
        }
    console.log("Factorial of Number: ", factorial);
});
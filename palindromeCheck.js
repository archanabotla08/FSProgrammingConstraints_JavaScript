let readline = require('readline');
let readInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var arrayOfInputs = 0;
//for multiple input
readInput.question("Enter two numbers: ", function (input) {
    arrayOfInputs = input.trim().split(' ');
    // console.log(arrayOfInputs[1]);
    readInput.close();
    var number_1 = parseInt(arrayOfInputs[0]);
    var number_2 = parseInt(arrayOfInputs[1]);

    palindrome(number_1);
    palindrome(number_2);
    function palindrome(n) {
        let reversedNumber = 0;
        let originalNumber = n;
        while (n > 0) {
            remainder = n % 10;
            reversedNumber = (reversedNumber * 10) + remainder;
            n = parseInt(n / 10);
        }
        if (originalNumber == reversedNumber) {
            console.log(originalNumber, "is palindrome");
        }else {
            console.log(originalNumber, " is not palindrome");
        }

    }
});
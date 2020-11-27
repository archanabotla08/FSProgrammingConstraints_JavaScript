const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question('Enter the number ?', input => {
    readline.close();
    let number = parseInt(input);

    let flag = 0;
    let temp = number / 2;

    while (true) {
        if (primeNumber(number)) {
            if (palindrome(number)) {
                if (primeNumber(number)) {
                    console.log("Number is prime ,Palindrome and Palindrome Number is also prime");
                    break;
                } else {
                    console.log("Palindrome Number is not prime");
                    break;
                }
            } else {
                console.log("Number is not Palindrome");
                break;
            }
        } else {
            console.log("Number is not prime");
            break;
        }
    }
    function primeNumber(number) {
        for (i = 2; i <= temp; i++) {
            if ((number % i) == 0) {
                console.log(number, " is Not Prime Number");
                flag = 1;
                break;
            }
        }
        if (number == 1) {
            console.log(number, " is not prime Number");
            return false;
        } else if (flag == 0) {
            console.log(number, " is Prime Number");
            return true;
        }
    }

    function palindrome(n) {
        let reversedNumber = 0;
        let originalNumber = n;
        while (n > 0) {
            remainder = n % 10;
            reversedNumber = (reversedNumber * 10) + remainder;
            n = parseInt(n / 10);
        }
        if (originalNumber == reversedNumber) {
            console.log(originalNumber,"is palindrome");
            return true;
        }

        else {
            console.log(originalNumber, " is not palindrome");
            return false;
        }

    }
});
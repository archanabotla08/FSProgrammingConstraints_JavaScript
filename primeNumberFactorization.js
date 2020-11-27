const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the number ?', input => {
    readline.close();
    let number = parseInt(input);
    let outputArray = [];
    while (number % 2 == 0) {
        outputArray.push(2);
        number = number / 2;
    }
    for (i = 3; i <= Math.sqrt(number); i++) {
        while (number % i == 0) {
            console.log(i);
            number = number / i;
        }
        
    }
    if (number > 2)
            outputArray.push(number);
    for(i=0;i<outputArray.length;i++){
        console.log(outputArray[i]);
    }
});
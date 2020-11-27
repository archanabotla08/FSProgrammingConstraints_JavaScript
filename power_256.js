const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the power ?', input => {
    readline.close();
    let number = parseInt(input);
    let i = 1;
    let sum = 0;
    while( i < ((2**number)/2)){
        sum = 2 ** i;
        console.log("2 * ",i," = ",sum);
        if(sum == 256)
            break;
        i++;
    }

});
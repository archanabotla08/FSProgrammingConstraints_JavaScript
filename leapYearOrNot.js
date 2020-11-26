const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter year?', year => {
    readline.close();

    if ((year % 4) == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                console.log("Year:  is leap year", year);
            } else {
                console.log("Year: is not leap year", year);
            }
        } else {
            console.log("Year:  is leap year", year);
        }
    } else {
        console.log("Year:  is not leap year", year);
    }
});
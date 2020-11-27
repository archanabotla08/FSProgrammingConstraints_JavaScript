let readline = require('readline');
let readInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var arrayOfInputs = 0;
//for multiple input
readInput.question("Enter numbers into array :", function (input) {
    arrayOfInputs = input.trim().split(' ');
    readInput.close();
    console.log(arrayOfInputs.length);
    function triplet() {
        
        let flag = false;
        for (i = 0; i < arrayOfInputs.length - 2; i++) {
            for (j = i + 1; j < arrayOfInputs.length - 1; j++) {
                for (k = j + 1; k < arrayOfInputs.length; k++) {
                    let sum = parseInt(arrayOfInputs[i]) + parseInt(arrayOfInputs[j]) + parseInt(arrayOfInputs[k]);
                    if (sum == 0) {
                        console.log("triplet Pair is: ", arrayOfInputs[i], arrayOfInputs[j], arrayOfInputs[k]);
                        flag = true;
                    }
                }
            }

        }
        if (flag == false) {
            console.log("No Triplet Sum Exists");
        }
    }
    triplet();

});
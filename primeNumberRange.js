let readline = require('readline');
let readInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var arrayOfInputs = 0;
let primeNumbers = "";
//for multiple input
readInput.question("Enter lower and upper limit for prime", function (input) {
  arrayOfInputs = input.trim().split(' ');
  console.log(arrayOfInputs[1]);
  readInput.close();
  var lower = parseInt(arrayOfInputs[0]);
  let upper = parseInt(arrayOfInputs[1]);
  let count = 0;
  for (i = lower; i <= upper; i++) {
    let count = 0;
    for (j = i; j >= 1; j--) {
      if (i % j == 0)
        count = count + 1;
    }
    if (count == 2) {
      primeNumbers = primeNumbers + i + " ";
    }
  }
  console.log("Prime Numbers ", lower, " and ", upper, " : ");
  console.log(primeNumbers);


});
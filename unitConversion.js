let readline = require('readline');
let readInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  var arrayOfInputs = 0;
//for multiple input
readInput.question("Enter units and conversion choice 1: feet to inches 2: feet to meter 3: inches to feet 4: meter to feet",function(input){
     arrayOfInputs = input.trim().split(' ');
    console.log(arrayOfInputs[1]);
    readInput.close();
var units = parseInt(arrayOfInputs[0]);
let choice = parseInt(arrayOfInputs[1]);
console.log(units,choice);
switch(choice) {
    case 1:
        let inches = units * 12;
        console.log(input, inches ,"inches");
        break;
    case 2:
        let meter = units / 3.28 ;
        console.log(input, meter,"meters");
        break;
    case 3:
        let feet = units / 12;
        console.log(input, feet,"feet");;
        break;
    case 4:
        let feets = units * 3.28;
        console.log(input, feets,"feet");
        break;
    default:
        console.log("Invalid Choice");
        break;
    }

});
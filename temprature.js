let readline = require('readline');
let readInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var arrayOfInputs = 0;
//for multiple input
readInput.question("Enter temprature  and temperature Type: 1:Fahrenheit or 2:Celsius", function (input) {
  arrayOfInputs = input.trim().split(' ');
 // console.log(arrayOfInputs[0]);
  readInput.close();
  let temprature = parseInt(arrayOfInputs[0]);
  var tempratureUnits = parseInt(arrayOfInputs[1]);
 console.log(temprature,tempratureUnits);
  switch(tempratureUnits){
      case 1:
            if( temprature > 32 || temprature < 212){
               let degC = (temprature * 9/5) +  32;
               console.log("Temprature in Celsius:  ", degC);
            }else{
                console.log("Invalid temprature");
            }
            break;
      case 2:
            if(temprature > 0 || temprature < 100){
                let degF = (temprature - 32) * 5/9 ; 
                console.log("Temprature in Fahrenheit:  ", degF);
            }else{
                console.log("Invaild temprature");
            }
            break;
       default:
                console.log("Invalid input");
            break;
  }

});
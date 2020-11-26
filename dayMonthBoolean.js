let readline = require('readline');
let readInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  var arrayOfInputs = 0;
//for multiple input
readInput.question("Enter day and month",function(input){
     arrayOfInputs = input.trim().split(' ');
    console.log(arrayOfInputs[1]);
    readInput.close();
let day = parseInt(arrayOfInputs[1]);
let month = parseInt(arrayOfInputs[0]);
console.log(day);
if(arrayOfInputs[1] <= 6 & arrayOfInputs[0] <=20){
    console.log("Day: " , day ," Month: " , month , true);
}else if((arrayOfInputs[1] >= 3 & arrayOfInputs[1] < 6) & (arrayOfInputs[0] < 31)){
    console.log("Day: " , day ," Month: " , month , true);
}else {
    console.log("Invalid",false);
}
});










// Single Input Method
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
   
//   readline.question('Who are you?', name => {
//     console.log(`Hey there ${name}!`);
//     readline.close();
//   });
maxNumber = 0;
minNumber = 0;
for(i=1;i<=5;i++){
    randomNumber =  Math.floor(99 + Math.random() * 900) ;
    console.log(randomNumber);
    if(randomNumber > maxNumber){
        maxNumber = randomNumber;
    }else{
        if(minNumber == 0){
            minNumber = randomNumber;
        }else if(randomNumber < minNumber){
            minNumber  = randomNumber;
        }
    }
}

console.log("Max Random Number: " , maxNumber);
console.log("Min Random Number: ", minNumber);
let inputArray = [];
for(i=0;i<10;i++){
    randomNumber = Math.floor(99 + Math.random() * 900);
    inputArray.push(randomNumber);
}
for(i=0;i<inputArray.length;i++){
    console.log(inputArray[i]);
}
function secondSmallestNumber(){
    smallest = 1000;
    secondSmallest = 1000;
    for(i=0;i<inputArray.length;i++){
        if(inputArray[i] < smallest){
            secondSmallest = smallest;
            smallest = inputArray[i];
        }
        if((inputArray[i] > smallest) && (inputArray[i] < secondSmallest)){
            secondSmallest = inputArray[i];
        }
    }
}
secondSmallestNumber();
console.log("smallest: ", smallest," secondSmallest: ",secondSmallest);
function secondLargestNumber(){
    largest = inputArray[0];
    secondLargest = inputArray[1];
    if(secondLargest > largest){
        temp = secondLargest;
        secondLargest = largest;
        largest = temp;
    }
    for(i=2;i<inputArray.length;i++){
        if(inputArray[i] > largest){
            secondLargest = largest;
            largest=inputArray[i];
        }else if(inputArray[i] > secondLargest ){
            secondLargest = inputArray[i];
        }
    }
}
secondLargestNumber();
console.log("largest: ",largest," secondLargest: ",secondLargest);
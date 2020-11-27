let inputArray = [];
for(i=0;i<10;i++){
    randomNumber = Math.floor(99 + Math.random() * 900);
    inputArray.push(randomNumber);
}
for(i=0;i<inputArray.length;i++){
    console.log(inputArray[i]);
}
const inputArrayCopy = [...inputArray];
const secondSmallest = inputArrayCopy.sort()[1];
const secondLargest = inputArrayCopy.sort()[inputArrayCopy.length - 2];
console.log("secondSmallestNumber in Array : ",secondSmallest);
console.log("secondLargestNumber in Array : ",secondLargest);
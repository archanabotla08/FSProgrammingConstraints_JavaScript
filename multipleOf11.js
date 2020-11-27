let outputArray = [];
for(i=1;i<=100;i++)
{
    if(i % 11 == 0){
        outputArray.push(i);
    }
}

for(i=0;i<outputArray.length;i++){
    console.log(outputArray[i]);
}
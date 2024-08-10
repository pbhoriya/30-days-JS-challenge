// //Activity 1
const myArr=[1,2,3,4,5]
console.log(myArr)
console.log(myArr[0])
console.log(myArr[4])

//Activity 2
myArr.push(6)
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.unshift(0);
console.log(myArr)
myArr.shift();
console.log(myArr)


// //Activity3
const myArr1=[1,2,3,4,5,6]
const doubleArr=myArr1.map(function(number){
    return number*2;
});
console.log(doubleArr)

const evenno=myArr1.filter(function(number){
    return number%2==0
})
console.log(evenno);

const sum=myArr1.reduce(function(accumulator, currentValue){
    return accumulator+currentValue
})
console.log("The sum of array is",sum);

// //Activity 4
const myArr2=[1,2,3,4,5]
for(let i=0;i<myArr2.length;i++)
{
    console.log(myArr2[i]);
}
console.log();
console.log(myArr2.length)
console.log();
myArr2.forEach(function(number){
    console.log(number);
})

// Activity 5
const matrixArr=[[1,2],[3,4,7],[5,6]];
console.log(matrixArr);
for(let i=0;i<matrixArr.length;i++)
{
    console.log(matrixArr[i]);
}
console.log(matrixArr[2][0]);//pehle vala box index k  liye dusra vala block number k liye
// below method is use to print array elements sinle single
// for(let i=0;i<matrixArr.length;i++)
//     {
//         for(let j=0;j<matrixArr.length-1;j++)
//         {
//         console.log(matrixArr[i][j]);
//         }
//     }
//Arithmetic Operations
let num1= 20;
let num2= 10;
console.log(num1 + num2);

let num3= 20;
let num4= 10;
console.log(num3 - num4);

let num5= 20;
let num6= 10;
console.log(num5 * num6);

let num7= 20;
let num8= 10;
console.log(num7 / num8);

let num9= 20;
let num10= 10;
console.log(num9 % num10);

//Assignment Operators
let numb1=10;
numb1+=10;
console.log(numb1);

let numb2=20;
numb2-=10;
console.log(numb2);

//Comparison Operator and logical operator
let numc1 = 10;
let numc2 = 20;
let numc3 = 10;
let numc4 = 30;
let numc5 = 20
if (numc1 > numc2 && numc1 >= numc3) {
    console.log("Greater is ", numc1)
}

else {
    console.log("Greater is ", numc2);
}

if (numc1 < numc2 || numc2 <= numc4) {
    console.log("Lesser is ", numc1)
}

else {
    console.log("Lesser is ", numc2);
}

if (numc1 == numc3) {
    console.log("Equal is ", numc1)
}


if (numc2 === numc5) {
    console.log("Equal is ", numc2)
}

//Ternary Operator
let numd1=10;
let numd2=-5;
let numd3=0;
console.log((numd1>0) ? "positive" : "negative")
console.log((numd2>0) ? "positive" : "negative")
console.log((numd3>=0) ? "Equals" : "negative")

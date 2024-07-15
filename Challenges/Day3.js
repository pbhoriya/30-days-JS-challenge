//Activity 1
let num1=10;
if(num1>0)
{
    console.log("Positive");
}
else if(num1<0)
{
    console.log("Negative");
}
else{
    console.log("Equals to zero");
}

let age=18;
if(age>=18)
{
    console.log("Eligible to vote");
}
else{
    console.log("Not eligible to vote");
}

//Activity 2
let numb1=10;
let numb2=20;
let numb3=30;
if(numb1>=numb2 && numb1>=numb3)
{
    console.log("Greater is ",numb1);
}
else if(numb2>=numb3 && numb2>=numb1)
    {
        console.log("Greater is ",numb2);
    }
else{
    console.log("Greater is ",numb3);
}

//Activity 3
let numc1=6;
switch(numc1){
    case 1:
    console.log("Sunday")
    break;

    case 2:
    console.log("Monday")
    break;

    case 3:
    console.log("Tuesday")
    break;

    case 4:
    console.log("Wednesday")
    break;

    case 5:
    console.log("Thursday")
    break;

    case 6:
    console.log("Friday")
    break;

    case 7:
    console.log("Saturday")
    break;
}

let numc2=90;
switch(numc2){
    case 90:
    console.log("A")
    break;

    case 80:
    console.log("B")
    break;

    case 70:
    console.log("C")
    break;

    case 60:
    console.log("D")
    break;

    case 50:
    console.log("E")
    break;

    default:
    console.log("F")

}

//Activity 4
let numd=4;
console.log((numd%2==0) ? "Even" : "Odd")

//Activity 5
let year=2009;
if((year%4==0) || (year%400==0) && (year%100!==0) )
{
    console.log(year, "is a leap year");
}
else{
    console.log(year, "is not a leap year");

}


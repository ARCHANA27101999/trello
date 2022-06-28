// qstn3
//equation for javascript is a=k(1+rt)
let k=25000;
let ri=3;
let t=5;
let a=k*(1+(ri*t))
console.log(a)


// below program...question 4....about circumference

const pi=3.14;
let r=5;
let circumferance=2*pi*r;
console.log( circumferance);
//area of rectange..............question 5
let b=20;
let h=35;
let area =h*b;
console.log(area);
// perimeter of rectangle
let perimeter=2*(h+b);
console.log(perimeter)
//checking which is greater
if(perimeter>area){
    console.log  ("perimeter is larger than area")
}
else(area>perimeter)
{
  console.log  ("area is larger than perimeter")

}
// checking a person eligible for voting...question......6....
let age=17;
if (age<18) {
    console.log("sorry you are not eligible for voting")

    
} else {
    console.log(" you are eligible for voting")

    
}

// grade ...qstn 7....
let maths=90;
let physics=76;
let chemistry=78;
let biology=65;
let computerscince=85;
let totally= (maths+physics+chemistry+biology+computerscince);
let total=(totally/5)
console.log(total);
if (total<50) {
   console.log ("you failed");
    
}
 else if(total<55)
  {

    console.log ("you have D grade");
    
}

else if (total<65)
{



    console.log("you have c grade");

}

else if(total<75)

{

    console.log("you have b grade");



}
else if (total<85){

    console.log ("you have  a grade");



}
else if (total>85){

    console.log ("you have s grade");


}


// qstn .......9

let text='';
let sum=0;

for(let i=18;i<=78;i=i+2){
    text+=i +'<br>';
    sum+=i
   


}
document.write(text)
console.log(sum);





// // //qstn ...11
const number45=parseInt(prompt ("enter abig no:"))
const number34=parseInt(prompt("enter a smallno:"))

console.log(number45);
console.log(number34);
let textt='';

for(let k=number34;k<=number45;k++){
    textt+=k +'<br>';
   
   
     if(k%2==0 && k%5==0){
        console.log(k);
    }
}



function getExample(){
    let MyAge;
    MyAge=18;
    console.log(MyAge);
    MyAge=31;
    console.log(MyAge);
}

function getExample2(){
    let MyAge=31;
    MyAge=18;
    console.log(MyAge);
   
}

function getName(){
    let name;
    name=prompt('What is your name?');
    alert ('Hello'+ ' ' + name);
}


function getYear(){
    let year;
    year=+prompt('Year of birth');
    const YEAR = 2021;
    alert (YEAR-year);
}
 function getPerimeter(){
     let l;
     l = +prompt('writing l');
     alert (l*4);
 }

 function getRadius(){
    let radius;
    radius = +prompt('writing r');
    alert (radius*radius);
};

function getDistance() {
    let D,Time;
    D = +prompt ('write D');
    Time = +prompt ('write Time');
    alert (D/Time);

}
 
function getEuro() {
    let V;
    V =+prompt ('write Valute');
    const Euro = 0.89;
    alert (V*0.89);

}
function getRemember() {
    let Flesh;
    Flesh=+prompt ('write V gigabytes');
    const File = 0.820;
    alert (Flesh*File);
}

function getMoney () {
    let Money, number, exes ;
    Money = +prompt('write Money');
    const Chockolate = 50;
     number= Math.floor(Money/Chockolate);
console.log (number);
alert (number*1);
exes = (number*Chockolate);
alert (Money-exes);
  
  
} 

function getString () {
    let textH1 = "Hello!";
    let textAll
    
    
    = `${textH1} I am string`;

console.log (textAll);

}

function getManyText () {
    let text =`Hello!
    I am Student
    I am Ivanna!
    `;
    
    console.log (text);
}

function getNumber () {
   let someNum =458;
   console.log (someNum); 
}

function BigNum () {
    let someBigNum =1e6;   //1*1000000;
    console.log (someBigNum); 
 }

 
function LitNum () {
    let Linumber = 1e-6;
    console.log (Linumber);
}

function NumOne() {

    let NumOne=Math.floor (5.8);
    console.log (NumOne);
}
// var message="Hello"
// console.log(message)
// alert(message)
// var name = "Anyone";
// document.getElementById('demo').innerHTML="Hello there";

// function our_class(){
//     var name ="AnitaB";
//     console.log()
// }
// our_class(name)
// document.getElementById("button").addEventListener('click',function(){
//     document.write("Hey there");
    
// })
var message = 'Hello';
var name = 'Cudra';
var num = 4;
var sen = `My name is $(name)`;
console.log(message+name);
console.log(name+num);
console.log(typeof(name+num));
console.log('How are you ',name)
console.log(sen)

//Name is a reversed variable hence if you use it it brings an underline

//conditional/ternary opersators
let kids = 23
 let child = kids? 23: falseconsole.log(child);
let diff = (kids > 50)? 'these are many kids':'not enough kids';
console.log(diff)

var  x = [0,1,2,3,4,5,6,7,8,9]
for(let i = 0 ; i<x.length;i++){
    console.log(x)
}

let student ={
    name:"Cudra",
    age:20,
    class:'AnitaB'
};

console.log('age' in student)

delete student.name  //deleting an object
console.log(student);

console.log(typeof(student));

var today = new Date().toLocaleTimeString;
console.log(today)

// void expression

var  trees = [  'redwood'  ,  'bay'  ,  'cedar'  ,  'oak'  ,  'maple'  ]; 
console.log([11] in trees)

//in objects we use the items to access the item

// var today = the ,Date();
// let t = (today instanceof Date?)


//Global and local variable
//global var is accessible anywhere
var name = "Conslate";
function me(){
    //document.write("hey there")
    var car = "Toyota";
    console.log(name)
}
me()
// console.log(car)

//declaring JavaScript variable
function practice(){
    var x = 50; //available before declaration
    x=20 
    console.log(x)
    let p = 40;
    const m =30;

}

//types and value
var a = null
//a doesn't have a type but null has a type which is object

var b;
b = 4
console.log(b)

//Undefined error- if a value is not declared or gassigned a value

//Arrays-a collection of data types
let numb = [1,2,"3",[9]]; //2D array
console.log(numb.length);
console.log(numb[3][0]);
value_2d=numb[3][0] //accessing 2D Arrays
console.log(value_2d)
 
let namsey = [`you`,[`Them`,[`guys`]]] //3D array
console.log(namsey[1][0][0])

let p ='foo'
let t = p.concat(`bar`) //concatination
console.log(t)

//classes
function Pupil(){
    constructor(name);
        this.name=name;
}

pupil=new Pupil("Cudra");
console.log(pupil.name);
Pupil.prototype.gender=`female`;    //prototypes
console.log(pupil.gender);

//converting between type
var q = `45`;
console.log(Number(a)+3);   //explicit coercion - changing into a number but it remains to be as defined
console.log(typeof(a));

let v = 4;
let w = 4 + `hey`;  //implicit coercion
console.log(w);
console.log(Number(w))
console.log(typeof(w))

//you can change a number to a string
//this is a single line  comments
/*multiple
line comments*/

//take a list
//create a counter with a variable sum = 0
//iterate variable string and add elements to sum variable
//console sum


//Conditional statements
let my_name = "Cudra"
if (my_name != `Cynthia`){
    console.log(`Hey there`);
    if(my_name.length <=3){
        console.log("Name is too short");
    }else{
        console.log("Name not accepted")
    }
}

let g = 20;
let f = 10;
let add = g+f
//&& -> and ->both conditions are true
//|| -> or -> either one or both are true

if (add <= 30 || a >20){
    console.log(true);
}
else{
    console.log(false);
}

//SWITCH STATEMENTS
// let l = 20;
var grade = 'B';
    console.log("Entering switch block");
switch (grade) {        //used when you have one condition- It is a single expression
    case 'A': console.log("Good job");
    break;
 
    case 'B': console.log("Pretty good");
    break;
 
    case 'C': console.log("Passed");
    break;
 
    case 'D': console.log("Not so good");
    break;
 
    case 'F': console.log("Failed");
    break;
 
    default:  console.log("Unknown grade")
 }

 see=10;
 you=20;

 switch(true){
    case see==10:
    console.log("Yes it is")
    break;
    case you <=20:
        console.log("you")
        break;

    default:
        console.log("Bye")
        break;
 }

 //TERNARY OPERATOR
 const amount=20;
 let amount_b = amount>20 ? true : false;
 console.log(amount_b)

 var age = 26;
 let beverage = age >=21 ? "Beer":"Juice";
 console.log(beverage)
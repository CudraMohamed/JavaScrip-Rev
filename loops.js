//triple equal signs check for value and equality of the values ===

function random(){
const materials = ["Lockers","tables","Chairs","Computerss","Television"];
const food = ["Chapati","Ugali","Chicken","Fish","CHips"];
const persons ={

him :"John",
age:20,

}


outerloop:
for (j=0;j<food.length;j++){
    for (i=0;materials.length;i++){
        
        if(i===1){
            break outerloop;            //label  statement
        }
        console.log(food[j],materials[i])
    }
}

        //For loop
        // for (let p = 0; p < materials.length; p++){
            // console.log(materials[i]);       while using break -> the statement comes before the break
            // if (i===2){
            //     break;
            // }
        //     if (p===3){
        //         continue;
        //     }
        //     console.log(materials[p])
        // }

        //do...while loop
        let a=0                             //defining variable
        do{
            console.log(materials[a])       //statement
            a++
        }
        while(a<materials.length){            //condition
        }


        //for ....in statement
      for (x in materials){     //prints out the values #arrays do
        console.log(x)
      }  
    
        //for ....of statement
        for (y of materials){       //prints the elements
            console.log(y)
        }
        //printing objects
        for(prop in persons){
            console.log(persons[prop])
        }

}
//recursion ->  revocking a function
//function scope -> variable in a function can't be used outside the function
//Closure -> Nesting functions
//arguments object -> all the variables are added here and can be accessed 
function square(number){
    return number * number;
}
function rectangle () {
    return arguments[0]*arguments[0];
}
const s = rectangle(1,2)
console.log(s)

function outerFunction(){
    const s = "I am outer";

    setTimeout(function(){
        console.log(s)
    },2000)
}
//function parameters
//comparing values

//scope
function children(){
    if (true){
        var myName ="Cudra";
        var mName="Mohamed";
    }
    console.log(myName);
    console.log(mName);
}
children()

var num= [1,2,3,4,5,6,7]
for (let i=0;i<num.length;i++){
    console.log(num[i])
}

//tertiary
var a =30;
// if (a < 40 ) ? true:false;

//functions as values
//anonymous functions are functions that don't have a name
let  v=function(){   //a is the name of this anonymous function
    console.log("Hello, World!")
}
v() //invoking the function

//a callback function -> used in promises
//takes functions as the argument

function peopl(){
    console.log("Hey, there!");
}
function you(){
    console.log("3");
    peopl()
}
you()

//anything that takea a function as a parameter is a callback function
//eg onClickListeners

let pale=[1,2,3,4];
let pale2=pale.map(yeh=> yeh *2)
let pale3=pale.map(function(yeh){
    return yeh*2
})
console.log(pale2);
console.log(pale3);

// let button2=document.getElementById("button").addEventListener("click",function(){
//     this.innerText="Hey"
// })

// const[data,setData]=useState();
// const onHandLetChange()=>{
//     setData(data)
// }

//IIFE(Immediately invoked Function Expressions)
(function(){
    console.log("sasa");
}
)()

let yetu=(()=>{
    return 5
})();

//object,arrays,classes,promises,data handling-in front end-validation in backend

//async-goes outside a javascript function-use await

//initiating an array
let b =["Mango","Apple"];

let c= new Array("Banana","Kiwi","Melon","Pie");
console.log(b)
console.log(c)

//add end of array
b.push("Orange")

//add in the beginning
b.unshift("Grapes")

b.pop()

b.shift()

//go inside the array and perfom operations
//callback function - called after th iteration
let d=c.map(_item=> `I love ${_item}`);
console.log(d);

let e=c.map(function(_item){
    return `I love ${_item}`
})
console.log(e);

//callback function
function people(){
    return "You guys";
}
function students(a,_callback){
    console.log(a);
    console.log(_callback);
}
students(12,people());

console.log(c.splice(1,2))  //deleting element using indices
console.log(c);

//Objects
//takes in keys and values
var people2={
    name:20,
    country:"Kenya"
};
console.log(people2["country"]);
var person=new Object(people2);
console.log(person.name);

person["age"]=35;
console.log(person)


// for ([key .values]of Object.keys(person)){
    // console.log($(keys),$(values))
    // console.log(person[key]);
// }

//FREEZE
// Object.freeze(person)       //can not add nor modify
// Object.seal(person)     //can modify but not add
// person.name="Anita"

delete(person.age)
console.log(person)

Object.assign(person,{school:"AkiraCHix"}); //copies to another object
console.log(person);


//METHODS
var teacher={
    jina:"Cudra",
    hobby:function(){   //METHOD
        // console.log(`My name is ${teacher.jina}`);- not javaScript correct
        console.log(`${this.jina}`);     //to access a global object
        return "I love programming"
    },
    friend:{
        name:"Joy",
        age:23,
        first:"Cooking",
    }
}
console.log(teacher.hobby())
console.log(teacher.friend.name)

//this to symbolises you are calling a global object in a function

//CLASSES
class Students{
    constructor(name,age,school){
        this.name=name
        this.age=age
        this.school=school
        this.hobby=function(){
            return "I love programming"
        }
    }
}

// Students={
//     name:"Kudra",
//     age:20,
//     school:"AkiraChix"
// }
Students.prototype=function(){  //adding prototypes in a class
    return `I love coding`
}

var firstStudent=new Students("Kudra",20,"AkiraChix",);
console.log(firstStudent.age);
console.log(firstStudent)



//funcion constructors
function Mwanafunzi(name,age,school){
    this.name=name
    this.age=age
    this.school=school
}
var secondStudents=new Mwanafunzi("Susan",23,"AkiraChix")
console.log(secondStudents)

//Popifilling- converts new js to old js
//babel-converts new to old js

//transpilling-converts old js to new js


//Array distractors - giving array elements making them values
var names=["Chiri","Zipporah","Shamim"]
var[conslate, ...others]=names;     //.... is the spread operator       //assigning as values to the var side
console.log(conslate);
console.log(others);
//[]-array literals
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
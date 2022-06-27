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
if (a < 40 ) ? true:false;
function children(){
    var myName ="Cudra";
    const mName="Mohamed";
    console.log(myName)
    console.log(mName)
}
children()

function num(){     //parent scope
    var a=2;
    function add(){     //child scope
        var b=3;
        var c = a+b;
        console.log(c)
    }
    add();
}
num();
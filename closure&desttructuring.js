function outer(num1){
    var num2 = 20;
    return function (){
        return num1+num2;
    }
}

const closure = outer(10);
console.log(closure());

function outer(){
    let count = 0;

    return function(){
        console.log(count++)
    }
}

const counter = outer();
counter();
counter();
counter();
counter();
counter();




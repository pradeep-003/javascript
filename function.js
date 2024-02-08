function greet(){
    console.log("Hii ")
    console.log("Wlcome to the 7pm class")
}

greet()

function sum(a,b){
    return a+b;
}

console.log(sum(5,6))

function fact(n){
    if (n == 0 || n == 1){
        return 1;
    }
    return n*fact(n-1);
}
console.log(fact(5))

function fact1(n){
    if (n == 0 || n == 1){
        return 1;
    }
    r=1
    for(i=1;i<=n;i++){
        r=r*i
    }
    return r;
}

console.log(fact1(5))

const hello_func = function hello(){
    console.log("Hello my dear friend")
}
// hello() -- errror hello() is not defined
hello_func()
console.log(hello_func());  
// Hello my dear friend
// Hello my dear friend
// undefined

const varit = function (){   //Anonymous function
    console.log("Hello my dear friend")
}


function operate(a,b,fn){
    console.log(fn(a,b))
}

function sum(a,b){
    return a+b
}

operate(5,6,sum);

function return_greet_fn(){
    return function(){
        console.log("Hello Students")
    }
}

return_greet_fn()()

console.log(return_greet_fn()) // [Function (anonymous)]

function fn(){
    console.log("Hello from outer")
    return function(){
        console.log("Hello from inner")
        return function(){
          console.log("Hello from innermost")
        }
    }
}

fn()  
// Hello from outer
fn()()
// Hello from outer
// Hello from inner
fn()()()
// Hello from outer
// Hello from inner
// Hello from innermost


function sum(a,b){
    return a+b;
}
console.log(sum(5,6,8))

// This is a sum function which can add any no. of arguments

function sum(){
   console.log(arguments)

    let sum = 0 
    for(i=0;i<arguments.length;i++){
        sum += arguments[i] 
    }
    return sum;
}

console.log(sum(5,6))

console.log(sum(5,6,7,8))

function func(){
    func = 43
    console.log(func)
}
func()


function add(a,b){
    console.log("Inside the add function");
    return a+b
}
console.log(add(5,6))

const add1 = (a,b)=>{
    console.log("Inside the add1 function");
    return a+b
}
console.log(add1(5,6))


const hello = () => {
    console.log("Hello students")
}

hello()

const sum_three = (a,b,c)=>{
    return a+b+c
}

process.stdout.write(sum_three(4,5,6) + " ")

// Function with no return

greet = (name)=>{
    console.log(`Hello ${name}`)
}
greet("vashma")

sum = (a,b)=>{
    return a+b     // only one statement 
}

sum = a => a
console.log(sum(3,4))

findEvenOrOdd = (num)=>{
    if(num%2 == 0){
        return "Even"
    }else{
        return "odd"
    }
}

console.log(findEvenOrOdd(22))


findEvenOrOdd = a => a%2 == 0 ? "Even" : "odd"  //Single line arrow + Terniary operator
console.log(findEvenOrOdd(23))

// arrowFunction returning an object
cs = (x,y) => ({
    sum:x+y,
    diff:x-y
})
console.log(cs(5,4))
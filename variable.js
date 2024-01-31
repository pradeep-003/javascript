let name1 = 'pradeep Bisht'
let name2 = "pradeep Bisht";
let name3 = `pradeep Bisht`

// ; -- optional

console.log(name1);
console.log(name2);
console.log(name3);

let statement = 'Mithun said "Js is cool"'
console.log(statement);

console.log(typeof statement);

let age = 21
console.log(age);
console.log(typeof age);

let height = 6.2
console.log(height);
console.log(typeof height);

const condition1 = true
let condition2 = false

console.log(condition1);
console.log(typeof condition1);  // boolean

let values = 0/0 

console.log(values); // NaN
console.log(typeof values); // Number

let age1 = undefined
let discount = null

console.log(age1);
console.log(typeof age1); // undefined

console.log(discount);
console.log(typeof discount); // object

let veryBigNumber = 111n
console.log(veryBigNumber);  // 111n
console.log(typeof veryBigNumber); // bigint

let simpleSymbol = Symbol("This is a Symbol")
console.log(simpleSymbol);
console.log(typeof simpleSymbol);

console.log("Hello, "+ name1+ " You are "+age+ " Years old");

//string interpolation
console.log(`Hello, ${name1} you are ${age} years old`);
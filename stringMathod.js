const hello = "Hello World";

hello[2]  = 'w'
console.log(hello); // strings are immutable

console.log(hello.at(2))
console.log(hello.at(-3))
console.log(hello[-3]) // -ve in box is not allowed
console.log(hello[3]) 

console.log(hello.charAt(3)) // // -ve is not allowed

console.log(hello.endsWith('ld'))
console.log(hello.endsWith('or', 9)) // pass length

console.log(hello.includes('or'))
console.log(hello.includes('ot'))
console.log(hello.includes('lo', 5))
console.log(hello.includes('lo', 3))

const hello = "Hello World";
console.log(hello.padStart(20,'.')) // String  is immutable
console.log(hello.padEnd(20,'!')) // can't change orignal string
console.log(hello.repeat(3))
console.log(hello.replace('lo W', 'abc')) 
console.log(hello.replaceAll('l', '*'))
console.log(hello.replace('l', '*')) // Replace only 1st occurence

const hello = "Hello World";
console.log(hello.indexOf('l', 3))
console.log(hello.indexOf('l', 5))
console.log(hello.indexOf('l', 10))
console.log(hello.slice(3, -3))
console.log(hello.slice(3))

const hello = "Hello World";
console.log(hello.split(' '))
console.log(hello.split(''))
console.log(hello.split('  '))

console.log(hello.substring(3,8))
console.log(hello.substr(3,6)) // (index,length)

console.log(hello.toLowerCase() === "hello world")

const hello = "       Hello World        ";
console.log(hello.trim())
console.log(hello.trimStart())
console.log(hello.trimEnd())

var abc;
if(abc === "" || abc === null || abc === undefined || abc == false){

} 

if(['', null, undefined,false].includes(abc)){

}

let date = new Date();
console.log(date)
console.log(Date.now())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getFullYear())
console.log(date.getHours())


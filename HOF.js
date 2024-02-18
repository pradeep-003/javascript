function calculatorFunction(operation, initialValue, numbers){
    let total = initialValue
    for(const number of numbers){
        total = operation(total,number) 
    }
    return total
}
function sum(n1, n2){
    return n1+n2
}

function multiply(n1, n2){
    return n1*n2
}
console.log(calculatorFunction(sum, 0, [1, 3, 4]))
console.log(calculatorFunction(multiply, 1, [1, 3, 4]))

arr.forEach((elem, index, arr) => {

})

/*
// Another use case of Hof
obj1

obj2

const bound = obj2.func.bind(obj1); // returning a function

bound()
*/

const sqr = num => num**2
const dbl = num => num*2

const compose = (func1, func2) => value => func2(func1(value));
const sqrThenDbl = compose(sqr, dbl)
console.log(sqrThenDbl(3))

//Que1.

const findIndex = (callback, nums) => {
    let index = -1;
    for(let i=0;i<nums.length;i++){
        if(callback(nums[i])){
            index = i;
            break;
        }
    }
    return index;
}

const arr = [1, 2, 3, 9, 4, 5, 7]

const condition = num => num > 8
console.log(findIndex(condition, arr))


const forEach = (cb, arr) => {
    for(let item of arr){
        cb(item);
    }
}

const callback = num =>{ 
    console.log(num);
}

forEach(callback, [1, 3, 5, 2, 6, 4])

function hiFunction(name, callback){
    console.log(`Hi ${name} I am the actual function`)
    callback();
}
//callback function
function exampleFunction(){
    console.log('I come from the callBack function')
}
//Passing function as an argument
hiFunction('Folks', exampleFunction)


// callback hell

getProduct(18, (user)=>{
    console.log("GEt Products", user);
    getUSerInfo(user.username, (name) => {
        console.log(name);
        getAddress(name, (item) => {
            console.log(item);
            // this goes on and on...
        })
    })
})


function multiplyBy7(){
    return function(x){
        return x*7
    }
}

const innerFunction = multiplyBy7();
console.log(innerFunction(5))

let count = 1;
setInterval(() => {
    console.log(count++);
}, 1000) //1000 miliSec

let count1 = 10;
const countDown = () => {
    console.log(count1--);
    if(count1 === 0){
        clearInterval(timer);
    }
}

const timer = setInterval(countDown, 1000)

function fetchDataFromAPI(){
    const date = new Date();
    console.log('Fetching data from the API at:', date.toLocaleString())
}

const dataFetchInterval = setInterval(fetchDataFromAPI, 3000)

//stop fetching data after 15 seconds (just as an example)
setTimeout(function(){
    clearInterval(dataFetchInterval)
    console.log('Data fetching stopped after 15 seconds.')
}, 15000)

//It will print only once
setTimeout(()=>{
    console.log('Hii');
}, 1000)

//It will print infinite times
setInterval(() => {
    console.log('Hii');
}, 1000)

const timeoutId = setTimeout(function(){
    console.log('Hii');
}, 2000);
clearTimeout(timeoutId);
console.log('Timeout has been cleared');

/* ******************************** */
// Synchronus Task - always run after asynchronus and for loop is a Synchronus Task and Asynchronus Task -setTimeout
for(var i=0;i<5;i++){
    setTimeout(() => {
        console.log(i);
    }, 1000); // if time delay is 0 still output will be same
}
/* Output
5
5
5
5
5
*/

// two ways to print 0 to 4 ..

for(let i=0;i<5;i++){
    setTimeout(() => {
        console.log(i);
    }, 1000); 
}

for(var i=0;i<5;i++){
    setTimeout(((i_local) => {
        console.log(i_local);
    })(i), 1000); 
}

for(var i=1;i<=16;i=i*2){
    (function(num){
        setTimeout(() => {
            console.log(num);
        },2000);
    })(i);
}

// Foreach, map, filter, reduce --> Arrays

const nums =[1, 2, 3, 4, 5];
nums.forEach((num, index, arr)=>{
    console.log(num, arr[index])
});

const newNums1 = nums.map((num,index,arr)=>{
    return num*3;
});
console.log(newNums1);

const newNums = nums.map(num=>num*2);
console.log(newNums);

//odd Numbers
const newNums2 = nums.filter((num,index,arr)=>{
    return num%2 !== 0;
});
console.log(newNums2);

// Can't use break statement with forEach, map, filter, reduce

const nums4 =[1, 2, 3, 4, 5];
const total = nums4.reduce((sum, num, index, arr)=>{ //sum is accumulator
    console.log(`sum = ${sum}, num = ${num}`);
    return sum + num; // return to sum which is accumulator
    // sum += num; 
    // return sum;
}, 0) // this 0 is passed to sum 
console.log(total);

const nums5 =[1, 2, 3, 4, 5];
const Mul = nums5.reduce((mul, num)=>{ //mul is accumulator
    console.log(`sum = ${mul}, num = ${num}`);
    return mul * num; // return to mul which is accumulator
    // sum += num; 
    // return sum;
},1) // 1 is passed to mul but in case if we don't pass anything in that case array 1st element is assigned to mul
//and loop will run 1 time less
console.log(Mul);

const products = [
    {id: 1, name: 'Laptop', price: 999},
    {id: 2, name: 'Phone', price: 499},
    {id: 3, name: 'Tv', price: 699},
]
console.log(products.map(product=>product.name))

let num = [1,2,3,4,5,6,7]
const high = Math.max(...num); // Math.max.apply(null, num);
console.log(high);

console.log("endswith".endsWith("with")); // true

console.log("endswith".endsWith("end")); // false
console.log("hello world world".replace("world", "earth"));

function reverseWords(sentence){
    return sentence.split(' ').map(word=>
        word.split('').reverse().join('')).join(' ');
}
console.log(reverseWords('hello world'));


function getDayName(){
const date = new Date();
const day = date.getDay();
const dat = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
console.log(`${year}-${month}-${dat}`);
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thu', 'Fri', 'Sat'];
console.log(days[day])
}
getDayName();


setTimeout(()=>{console.log("F")},3000);
setTimeout(()=>{console.log("S")},2000);
setTimeout(()=>{console.log("T")},1000);

// output: 
/*
*T
*S
*F
*/

let callCount = 0;
let rateLimitTimeout;

function performOperation() {
  console.log('Operation performed at:', new Date());
}

function rateLimitOperation() {
  callCount++;
  if (callCount > 3) {
    console.log('Rate limit exceeded. Please wait...');
    return;
  }

  clearTimeout(rateLimitTimeout);
  rateLimitTimeout = setTimeout(() => {
    callCount = 0;
  }, 5000);

  performOperation();
}

rateLimitOperation();
rateLimitOperation();
rateLimitOperation();
rateLimitOperation();

setTimeout(rateLimitOperation, 7000);
setTimeout(rateLimitOperation, 8000);




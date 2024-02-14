/*
 Create an arrow function called square that takes a number as an argument and returns its squar Use 
the arrow function to calculate the square of a given number and display the result.
*/

const square = n => n**2
console.log(square(4))

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort((a,b) => a-b);
const minAge = ages[0];
const maxAge = ages[ages.length-1];

let medianAge;
if(ages.length % 2 == 0){
    const mid1 = ages[Math.floor(ages.length/2)-1];
    const mid2 = ages[Math.floor(ages.length/2)];
    medianAge = (mid1+mid2)/2;
}else{
    medianAge = ages[Math.floor(ages.length)/2]
}

sumOfAges = 0;
for(num of ages){
    sumOfAges += num;
}
avgAge = (sumOfAges/ages.length);
console.log(avgAge);
// a = 5/2;
// console.log(a) --> 2.5

const sumAges = ages.reduce((sum, age)=>sum+age, 0);
const avgAge = sumAges/ages.length

const ageRange = maxAge - minAge;

const minDifference = Math.abs(minAge - avgAge);
const maxDifference = Math.abs(maxAge - avgAge);

const contactMap = new Map();
contactMap.set("Rahul",{
    age:16,
    email:"Rahul121@gmail.com",
    location:"dubai"
});
contactMap.set("Ashmita",{
    age:27,
    email:"Ash01@gmail.com",
    location:"Maldives"
});

function getContact(name){
    return contactMap.get(name);
}

console.log(getContact('Ashmita'));

const person1 = {name:"Sakshi", age:22};
const person2 = {name:"Madhu", age:21};
 function introduce(){
    console.log(`Hello, I am ${this.name}, and I am ${this.age} years old`);
 }

 introduce.call(person1);
 introduce.call(person2);

let uniqueNumbers = new Set([3, 7, 5, 7, 2, 3, 8]);
let numberSquareMap = new Map();

uniqueNumbers.forEach(number => {
    numberSquareMap.set(number, number**2)
});

console.log(uniqueNumbers);
// uniqueNumbers.forEach(num => console.log(num));

console.log(numberSquareMap);

function displayInfo(salary){
    console.log(`${this.name} ----> ${this.role} & salary => RS.${salary}`)
}
const person3 = {name: 'preeti' , role: 'doctor'} 
displayInfo.call(person3, 100034);
displayInfo.apply(person3, [100034]);

function greet(name){
    console.log(`Welcome ${name}, in ${this.country}`);
}
const country = {country : "India"}
let boundGreet  = greet.bind(country);
boundGreet("Rakul");
boundGreet("Raghav");

// Create the calculator object
const calculator = {
    add: function(num1, num2) {
      return num1 + num2;
    },
    subtract: function(num1, num2) {
      return num1 - num2;
    },
    multiply: function(num1, num2) {
      return num1 * num2;
    },
    calculate: function(operation, num1, num2) {
      if (operation === 'add') {
        return this.add(num1, num2);
      } else if (operation === 'subtract') {
        return this.subtract(num1, num2);
      } else if (operation === 'multiply') {
        return this.multiply(num1, num2);
      } else {
        return 'Invalid operation';
      }
    }
  };
  
  // Perform addition operation using calculate method with call
  const resultAddition = calculator.calculate.call(calculator, 'add', 5, 3);
  console.log('Result of addition:', resultAddition); // Output: 8
  
  // Perform multiplication operation using calculate method with apply
  const args = ['multiply', 4, 2];
  const resultMultiplication = calculator.calculate.apply(calculator, args);
  console.log('Result of multiplication:', resultMultiplication); // Output: 8
  
  // Create discountCalculator object
  const discountCalculator = {
    discountPercentage: 10,
    applyDiscount: function(price) {
      const discountAmount = (this.discountPercentage / 100) * price;
      return price - discountAmount;
    }
  };
  
  // Use bind to create calculateDiscount function
  const calculateDiscount = calculator.calculate.bind(discountCalculator, 'subtract');
  const discountedPrice = calculateDiscount(100);
  console.log('Discounted price:', discountedPrice); // Output: 90
  




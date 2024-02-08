function GradingSystem(Marks){
switch (true) {
    case Marks>=90 && Marks<=100:
        Grade = 'A'
        break;
    case Marks>=70 && Marks<90:
        Grade = 'B'
        break;
    case Marks>=50 && Marks<70:
        Grade = 'C'
        break; 
    case Marks<=50 && Marks>=0:
        Grade = 'F'
        break;       
    default:
        Grade = "Enter a valid number!!"
        
    }
    return Grade;
}
console.log(GradingSystem(42))
console.log(GradingSystem(92))
console.log(GradingSystem(82))
console.log(GradingSystem(62))
console.log(GradingSystem(102))

// 2. 

function generateNumbersBetween(num1, num2) {
    const numbers = [];
    for (let i = num1 + 1; i < num2; i++) {
        numbers.push(i);
    }
    return numbers;
}

const num1 = 10;
const num2 = 25;

console.log(generateNumbersBetween(num1, num2));

function ch(number){
number>=0?number==0?console.log('0'):console.log('+ve'):console.log('-ve')
}
ch(0)
ch(1)
ch(-1)

/*
Q5. You're creating a basic login system. Make a login function with two things: a username and a 
password. Check if the username is "admin" and the password is "12345". If they're both correct, show "Login 
successful"; if not, show "Invalid credentials."
*/

function login(username, password){
if(username === 'Admin' && password === 12345){
console.log('Successful')
}else{
    console.log('Invalid credentials')
}
}

/*
Q7. You are building a weather application. Write a JavaScript program that takes the current temperature 
as input and uses the conditional (ternary) operator to determine and print the weather condition. If the 
temperature is above 30°C, the condition is "Hot"; otherwise, it is "Moderate".
*/

function determineWeatherCondition(temperature) {
    const weatherCondition = temperature > 30 ? "Hot" : "Moderate";
    console.log(`The weather condition is ${weatherCondition}.`);
}

// Example usage:
determineWeatherCondition(25); // Output: The weather condition is Moderate.
determineWeatherCondition(35); // Output: The weather condition is Hot.


function sum(k){
    i = 1, sum1 = 0;
do{
sum1 += i;
i++ 
}while(i<=k)
return sum1;
}

console.log(sum(5))
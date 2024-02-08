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


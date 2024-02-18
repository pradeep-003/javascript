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

function fetchData(url, callback){
    console.log('Initiating data fetch from', url);

//Simulating an asynchronous request
setTimeout(function(){
    const data = 'Fetched data from '+ url;
    callback(data);
},1000);
}

function processData(dataProcessor){
    const url = 'https://example.com/api/data';

    fetchData(url, function(data){
        dataProcessor(data);
    });
}

//Example usage
processData(function(data){
    console.log('Processing data:', data);
});

// Lect-2

const nums = [1, 2, 3];
const [one, , three] = nums;
console.log(one);
console.log(three);
const [, num] = nums;
console.log(num);

const name = 'John doe';
const [firstName1, lastName1] = name.split(' ');
console.log(firstName1);
console.log(lastName1);

const [char1, char2, char3] = 'abc'.split('');
console.log(char1);
console.log(char2);
console.log(char3);

//Set can also be destructured 
const [num1, num2, num3] = new Set([1, 2, 3]);

console.log(num1);
console.log(num3);

const name2 = 'Bill gates';
const person = {};
[person.firstName, person.lastName] = name2.split(' ');
console.log(person);

let firstName = 'john';
let lastName2 = 'Doe';

[firstName, lastName2] = [lastName2, firstName];
console.log(firstName, lastName2);

// object destructuring

const obj = {
    firstName: 'john',
    lastName: 'Doe'
};

const {lastName = 'LN', middleName:mn = 'None', firstName:fn} = obj;
console.log(fn, mn, lastName);

let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ['Cake', 'Donut'],
    extra: true
};

const {
    size: {width:w},
    items: [, item2],
    abc:a = '123'
} = options;

console.log(w, item2, a)

function name({fn, ln}){
    console.log(`${fn} ${ln}`)
}

name({ln: 'Doe',fn: 'john'}) //Order is different but desired output

const person3 = {name: 'john', address: {city: 'New York', country: 'USA'}};

const getNestedInfo = ({name, address:{city, country}}) => `${name} lives in ${city}, ${country}`
console.log(getNestedInfo(person3));

const company = {
    name : 'TechCo',
    CEO: {
        name: 'John CEO',
        age: 45,
        address:{
            city: 'Silicon Valley',
            country: 'USA'
        }
    },
};

const getCEOInfo = ({CEO}) =>{
    const {name, age, address:{city}} = CEO;
    return {name, age, city}
}

const ceoInfo = getCEOInfo(company);

console.log(ceoInfo.name);
console.log(ceoInfo.age);
console.log(ceoInfo.city);

const person4 = {
    name: 'John',
    age: 30,
    address: {city: 'New York', country: 'USA'}
};

const modifyPerson = (person) => {
    const {name, age, address: {city}} = person;
    return{
        fullName: name,
        age:age*2,
        currentCity: city
    }
}

const modifiedPerson = modifyPerson(person4);

console.log(modifiedPerson.fullName);
console.log(modifiedPerson.age);
console.log(modifiedPerson.currentCity);
console.log(person4.name);
console.log(person4.age);
console.log(person4.address.city);


const nums1 = [1, 2, 3];
const nums2 = [6, 7, 8];
const newArr = [...nums1, 4, 5, ...nums2];
console.log(newArr);

const str =[1,2,3];
const sum = (a,b,c)=>a+b+c
console.log(sum(...str));

const str1 = 'abc';
const chars = [...str1];
console.log(chars)


let obj1 = {
    name: 'PW Skills',
    course: 'Full stack web D'
};
let obj2 = {rating: 5, reviews: 2000, name:'pw'}; 
const obj3 = {...obj2, ...obj1}; // name clash but new name printed as its deifned later
console.log(obj3)

const nums3 = [1,2,3];
console.log(Math.max(...nums3));

for(i=0;i<=5;i++){
    (function(num){
        setTimeout(()=>{
        console.log(num);
    },3000)
})(i)
}


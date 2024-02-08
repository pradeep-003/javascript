const person = {
    name : "Vishwa",
    age : 99,
    city : "Banglore"
}
console.log(typeof person);
console.log(person)

const user = {
    1 : "Vishwa",
    2 : "Mohan",
    true : "Sheetal"
}

console.log(user)  
// { '1': 'Vishwa', '2': 'Mohan', true: 'Sheetal' }  
// Js Treating 1,2,true as String
// as only String and symbol can be used as key
console.log(typeof user)

const person1 = {
    name : "Vishwa",
    age : 99,
    greet : function (){ 
        // Value can be function
        console.log("Hello Students")
    }
}
person1.greet()

// 2nd way to create object
// Using Constructor

const obj = new Object()
console.log(obj)

const obj1 = new Object({9:"Rohit", 10:"Kohli"})
console.log(obj1)
console.log(typeof obj1)

// 3rd way to create object
// Using function

function emp(id, name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}

const emp_obj = new emp(1, "Vishwa", 7000)
console.log(emp_obj) 


const student = {
    name : "Rohan",
    age : 19,
    address : {
        city : 'Bangalore',
        state : "Karnataka",
        pincode : 560049
    }
}

// I would like to read the properties of students
console.log(student.age)
console.log(student.name)

// using Bracket notation
console.log(student["age"])
// Print the city of the student
console.log(student.address.city)

console.log(student["address"].city)
console.log(student["address"]["city"])

/*
* I would like to insert new fields
*/

const person2 = {}

person2.name = "Pradeep"
person2.hobby = 'Cricket'
person2["country"] = "India"

console.log(person2)
person2.name = "Yumna" //Update the fields of the object

console.log(person2)

// Delete certain fields

delete person2["name"];
console.log(person2)

delete person2
console.log(person2) // delete can't delete the entire person2

// if a object want to access the method of another object then we use call,apply,bind

const person3 = {
    firstName: "Rahul",
    lastName: "Dua"
}
const person4 = {
    fullName: function(city, country){
       // console.log(arguments)
        console.log(`${this.firstName} ${this.lastName} lives in ${city}, ${country}`)
    }
}

person4.fullName.call(person3, 'New Delhi', 'India') // this in general refer to person4 but in case i call then it refer to called function person 3
person4.fullName.call(person3, 'Washintion', 'USA') 
person4.fullName.apply(person3, ['Washintion', 'USA']) // arguments passed as array in case of apply 

const bound = person4.fullName.bind(person3) 
bound('New Delhi', 'India')
bound('Katmandu', 'Nepal')
bound('Karanchi', 'Pakistan')
bound('Colombo', 'Srilanka')

function printFullName(personName){
    console.log(`Welcome ${personName} to ${this.firstName} ${this.lastName}`)
}

let person5 = {
    firstName: "PW",
    lastName: "Skills"
}
printFullName.call(person5, "Vishwa Mohan")

function randomNo_0to10(){
let y = Math.random()*10
x = Math.trunc(y)
return x
}

console.log(randomNo_0to10())




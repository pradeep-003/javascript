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
// { '1': 'Vishwa', '2': 'Mohan', '3': 'Sheetal' }  
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

// 2nd way to create object
// Using Constructor

const obj = new Object()
console.log(obj)

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










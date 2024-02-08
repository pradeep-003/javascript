const student = {
    name : "Rohan",
    age : 19,
    salary : 1000000,
    address : {
        city : 'Bangalore',
        state : "Karnataka",
        pincode : 560049
    }
}

// List of all the keys in the given object

console.log(Object.keys(student))
let stu =  Object.keys(student)
for(num of stu){
    console.log(num)
}

// List of all the values in the given object

console.log(Object.values(student))

// List of all the Key values Pair in the given object
console.log(Object.entries(student))

//assign
stu_new = Object.assign({},student,{role : "developer", Grade : "a+"})
console.log(stu_new)

student.jobType = "remote";
console.log(student)

const person = {
    name : "yumna",
    age : 26
}
console.log(person)
Object.freeze(person) //Object is now freezed and can't be modified

console.log(Object.isFrozen(person))

person.name = "hya"
person.hobby = 'pool'
delete person["name"]
console.log(person)


const person = {
    name : "yumna",
    age : 26
}
console.log(person)
Object.seal(person) //Object is now sealed means no addition,deletion only updation of existing field


console.log(Object.isSealed(person))

person.name = "hya"
person.hobby = 'pool'
delete person["name"]
console.log(person)


const person = {
    name : "yumna",
    age : 26,
    salary : 7000
}
Object.freeze(person)
console.log(Object.hasOwn(person,"name"))
console.log(Object.hasOwn(person,"namea"))

console.log(Object.getOwnPropertyNames(person)) // Object.keys(person)
console.log(Object.getOwnPropertyDescriptors(person)) 


const person = {
    name : "yumna",
    age : 26,
    salary : 7000
}
for(k in person){
    console.log(k)
}

Object.defineProperties(person,{
    salary : {
        value : 7000,
        enumerable : false
    }
})

for(k in person){
    console.log(k)
}
let studentDetails = {
    name: 'Mithun',
    age: 21,
    place: 'Bangalore'
}

console.log(studentDetails.age);
console.log(studentDetails['age']);
console.log(studentDetails);
console.log(typeof studentDetails); // object

let students = ['Mithun', 'Aman', 'shraddha', 123, true]

console.log(students);
console.log(typeof students); // object
console.log(students[3])
console.log(typeof students[4])
console.log(students[5]) // undefined

const student = {
    name: "Mithun",
    name: "kiran" 
}

console.log(student.name); // kiran
console.log(student['name']) // kiran
const setDemo = new Set()
setDemo.add(1)
setDemo.add(2)
setDemo.add(2) // Twice data do not get added only unique data
setDemo.add(5)
console.log(setDemo) 
console.log(setDemo.entries()) 
console.log(setDemo.values()) 
console.log(setDemo.keys()) 
setDemo.delete(2)
console.log(setDemo.size)
setDemo.clear()
console.log(setDemo.size)
console.log(setDemo)
console.log(setDemo.has(5))

const arr = new Set([1,2,2,3,4]); // Array to set
console.log(arr.size)
console.log(arr)

console.log(Array.from(arr)) // Set to array

const numb = [1,3,4,5,2,6,3,3];
const uniqNum = new Set(numb);
console.log(Array.from(uniqNum)) 


// MAP --> key not necessary to be string

const mapDemo = new Map();
mapDemo.set("name", "John");
mapDemo.set("age", 19);
mapDemo.set("male", true);
mapDemo.set(100, 3);
console.log(mapDemo.entries())
console.log(mapDemo.keys())
console.log(mapDemo.values())
console.log(mapDemo.has('male'))

mapDemo.delete('male')
console.log(mapDemo);
console.log(mapDemo.size);
mapDemo.clear();
console.log(mapDemo)

const user = {
    name : 'Mahesh',
    age : 19
}
const userFinal = new Map(Object.entries(user));  // object to map
console.log(userFinal)

const obj = Object.fromEntries(userFinal);
console.log(obj);


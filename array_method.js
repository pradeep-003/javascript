arr = [3,4,5,6,7,8]
console.log(arr.pop())
console.log(arr)
// add 11 at the end

arr.push(11)
console.log(arr)

fruits = ["Mango", "Apple", "Guvava"]
f = fruits.pop()
console.log(f)
fruits.push("orange")
console.log(fruits)

// Remove from 1st position

arr = [5,2,1,9,7,6]
x = arr.shift()
console.log(x)
console.log(arr)
l = arr.unshift(51)
console.log(arr)
console.log(l)

// concat

arr1 = [3,4,5,6]
arr2 = [7,8,9]

arr = arr1.concat(arr2)
console.log(arr)

arr_new = arr1 + arr2  // -> create a new string
console.log(typeof arr_new)  // String
console.log(arr_new)  // 3,4,5,67,8,9

let fruits = ["Mango", "Apple", "Guvava"]

let result = fruits.join() // Array to string in comma seperated form
console.log(result)
console.log(typeof result)

let result2 = fruits.join("-");
console.log(result2)

arr =[1,2,3,4]
console.log(arr.join("~$"));

// Slicing

let arr = [3,2,1,4,5,6,4,3,5,7,8]
sliced_arr = arr.slice(2,5)
console.log(arr)
console.log(sliced_arr)

console.log(arr.slice()) 
console.log(arr.slice(2,0)) // []
console.log(arr.slice(0,4,2)) // 2 ignored
console.log(arr.slice(-1)) 
console.log(arr.slice(-1, -4)) 
console.log(arr.slice(-4, -1)) 
console.log(arr.slice(-15, -1)) 
console.log(arr.slice(-15, 0)) 
console.log(arr.slice(1,-3)) 

arr = [3,2,1,5,4,9,11,8]
arr.splice(4,1,51)
arr.splice(4,1,51,43,23,12,76)
arr.splice(4,0,51,43,23,12,76)
console.log(arr)

arr = [1,2,3,4,5]
arr.reverse()
console.log(arr)

arr = [5,4,1,2,9,3]
arr.sort()
console.log(arr)

arr = [5,4,1,2,9,3]
arr.sort((a,b)=>b-a)
console.log(arr)


arr = [1,2,3,4,11,23,12]
console.log(arr.sort())  // [1, 11, 12, 2, 23,  3,  4]
// because sort method use alphabetic sorting so it's better to give function to sort

console.log(arr.sort((a,b)=>a-b))
let arr_nums = [1,2,3,4,5]
console.log(arr_nums)

console.log(arr_nums[0])
console.log(arr_nums[1])
console.log(arr_nums[-1])  // undefined

//Finding the length of array

let arr_nums1 = [1,2,3,4,5]
len = arr_nums1.length
process.stdout.write(len+" ")

let arr_num = [5]
console.log(arr_num) // [5]

//other way to define array

arr = Array(1,2,3,4,5)

console.log(arr)

empty_arr = Array(5)
console.log(empty_arr)  // [ <5 empty items> ]

//3rd way to creating arrays constructor way

fruits = new Array("Apple", "Mango", "Banana")
console.log(fruits)

// Deleting the element from the array
// but should not this
arr = [1,2,3,4,5,6]
console.log(arr)
delete arr[2]
console.log(arr)
console.log(arr.length) // space is consuming

arr1 = [1,2,3,4,5,6]
delete arr1[0]
for(i=0;i<arr1.length;i++){
    process.stdout.write(`${arr1[i]}  `)
}


function sumOfArray(arr2){
    sum = 0
    for(i=0;i<arr2.length;i++){
        sum += arr2[i]
    }
    return sum;
}

let arr = [1,2,3,4,5,6]
console.log(sumOfArray(arr))

// another way to iterate array

for(num of arr){
    console.log(num)
}

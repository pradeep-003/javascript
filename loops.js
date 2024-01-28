console.log("Hello Students")

for(i=2;i<=20;i=i+2){
    console.log(i)
}

for(i=0,j=10;i>=0&&i<j;i++,j--){
    console.log(`Hello Students, i,j : ${i}, ${j}`)
}

for(i=0;i<5;i++){
    process.stdout.write("* ")
}

for(i=0;i<5;i++){
    for(j=0;j<5;j++){
        process.stdout.write("* ")
    }
    console.log()
}

console.log("Approach 2")

for(i=0;i<5;i++){
    eat = ""
    for(j=0;j<5;j++){

        eat = eat + "* "
    }
    console.log(eat)
}

for(i=0;i<5;i++){
    for(j=0;j<5;j++){
        if(i>=j){
        process.stdout.write("* ")
        }
    }
    console.log()
}
/*

* 
* * 
* * * 
* * * * 
* * * * * 

*/

for(i=0;i<5;i++){
    for(j=0;j<5;j++){
        if(j>=i){
        process.stdout.write("* ")
        }
    }
    console.log()
}

/*

* * * * * 
* * * * 
* * * 
* * 
* 

*/


for(j=0;j<5;j++){
    if(j==3){
        break;
    }
    process.stdout.write(j+ " ")
}

for(j=0;j<5;j++){
    if(j==3){
        continue;
    }
    process.stdout.write(j + " ")
}


for(i=1;i<=3;i++){
    console.log("i= "+i)
    for(j=1;j<3;j++){
        console.log("Inside j, value of j ="+ j)
        break;
    }
    console.log()
}



for(i=1;i<=20;i++){
    if(i%3==0){
        continue;
    }
    process.stdout.write(`${i} `)
}

arr = [3,4,5,1,7]
str = arr.toString()

console.log(str)
console.log(typeof str)

arr = [2,3,4,[5,6,7]]
flat_array = arr.flat()
console.log(flat_array)
console.log(arr)

arr2 =  [1,2,3,[4,5,[7,8,[9,10,11]]]]
flat_arr2 = arr2.flat()
console.log(flat_arr2)  // [ 1, 2, 3, 4, 5, [ 7, 8, [ 9, 10, 11 ] ] ]
// flat() ~ does 1st level of flattening
console.log(arr2.flat(2)) 
console.log(arr2.flat(3)) 
console.log(arr2.flat(4)) // silent language

console.log(arr2.flat().flat().flat())

arr = [1,2,3]
console.log(Array.isArray(arr))
str = arr.toString()
console.log(Array.isArray(str))



//que.1
const ordersList = [
    {name: "Laptop", price: 120000},
    {name: "Mobile", price: 120000},
    {name: "Mobile charger", price: 120000},
    {name: "Laptop Charger", price: 120000},
];

let total = 0;
ordersList.forEach((item)=>(total += item.price))
console.log(`The total price is Rs.${total}`);

//que.2
const hii = setInterval(()=>{
    console.log(Math.random())
},2000)
setTimeout(()=>{
    clearInterval(hii);
},12000)


//que.3
let expenses = [
    {amount: 100, category: "Utilities"},
    {amount: 200, category: "Groceries"},
    {amount: 50, category: "Entertainment"},
]

let arr = expenses.map((item,index,array)=>{
     item.tax = (item.amount/100)*10;
     return array;
});
console.log(arr);

//que.4

const arr1 = expenses.filter((item,idx,arr)=>{
     return item.category == "Groceries";
})
console.log(arr1)

//que.5
let total1 = expenses.reduce((acc, exp)=>acc+exp.amount,0);
console.log(total1);

//que.6

let expenses = [
    {amount: 100, category: "Utilities"},
    {amount: 200, category: "Groceries"},
    {amount: 50, category: "Entertainment"},
]

function categoryExpense(i){
    if(i.amount>100){
        return "High Expenses"
    }
    else{
        return "Low Expenses"
    }
}
let k = expenses.map((item)=> categoryExpense(item));

console.log(k )


// ques.7

let originalNumbers = [2, 5, 8, 10, 3];

// Using forEach method to double each element
originalNumbers.forEach((number, index, array) => {
    array[index] = number * 2;
});

// Displaying the modified array
console.log(originalNumbers);

// que.8

let originalNumbers = [2, 5, 8, 10, 3];
let evenNumbers = [];

// Using forEach method to collect even numbers
originalNumbers.forEach((number) => {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
});

// Displaying the new array with even numbers
console.log(evenNumbers);

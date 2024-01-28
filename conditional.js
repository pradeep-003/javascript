let num = 0
if(num == 0){
  console.log("neither even nor odd")
}
else if (num % 2 == 0){
    console.log('The number is even');
} else{
    console.log('The number is odd');
}

let num1 =4
num1<5?console.log("yes"):console.log("no")

name = "vishwa"

console.log(name.toUpperCase());

age =23

// console.log(age.toUpperCase())  toUpperCase only used with String

if(typeof age == 'string'){
  console.log(age.toUpperCase())
}else{
  console.log("Age is not a String so, can't make it capital")
}

typeof age == 'string'?console.log(age.toUpperCase()):console.log("Age is not a String so, can't make it capital");

num = 24
typeOfNum = num%2 == 0 ? "Even": "Odd" 
console.log(typeOfNum)

isTheUserLoggedIn = false
isTheCoursePurchased = false

isTheUserLoggedIn ?
 isTheCoursePurchased ? console.log("Access Granted"):console.log("Please Buy")
 :console.log("Pleade login")

 isAdmin = false;
 if(isAdmin){
  console.log("Fetch the file through directories")
 }else{
  console.log("Can't Fetch file as you are not Admin")
 }

 day = 2
 switch (day) {
  case 1: console.log("Monday");
    break;
  case 2: console.log("Tuesday");
    return;
  case 3: console.log("Wednesday");
  break;
  default:console.log("Don't exist")
    break;
 }
 key = 2

 switch (key) {
  case 3: console.log(3)
    break;
  case 5: console.log(5);
  default: console.log("Default")
    break;
 }
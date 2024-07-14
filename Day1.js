//Day 1 variables and Data types
//Tasks/ Activities

//Activity 1: Variable Declaration

//Task 1 Declare  a variable using var assign it a number and log the value to the console
var number=100;
console.log(number);

//Task 2: Declare a variable using let and assign it a string and log the value to the console
let fullName="Tanya Grover";
console.log(fullName);

//Activity 2: Constant declaration

//Task 3: Declare a variable using const and assign it a boolean and log the value to the console
 const bool= false;
 console.log(bool);

 // Activity 3: Data Types
//Task 4: Create a different variables of different data types(number, string, boolean, object, array) and log each variables types using the typeof operator

// Number 
let a=12;
console.log(typeof(a));

//Strings

let name="tanya";

console.log(typeof(name));

//boolean

const isGood=true;
console.log(typeof(isGood));

// Objects
let student={
    name: "Tanya",
    course: "btech"
    
}
console.log(typeof(student));


// Array
let marks=[93, 87, 98, 99, 100];
console.log(typeof(marks));

// Activity 4: Reassigning variables
// Task 5= Declare a variable using let and assign it initial value then resign it new value and log both the values

//let val="btech"; 
//console.log("before reassigning "  + val);

let val="btech in cse";
console.log("After reassigning "  + val);


// Activity 5: Understanding const

// Task 6: Try reassigning a variables declared with const and observe the error

const x=12;
console.log("before reassigning "  + x);

// const x=121;// error occured
// console.log("After reassigning "  + x);




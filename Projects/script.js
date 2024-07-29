console.log(23 + 97)
console.log((4 + 6 + 9) / 77)

let n = 10
console.log(n)
console.log(n*9)
let m = 7*n
console.log(m)


const x = "x";
const y = "y";
if (x < y) {
  // true
  console.log(`${x} is less than ${x}`);
} else if (x > y) {
  console.log(`${x} is greater than ${y}`);
} else {
  console.log(`${x} and ${y} are equal.`);
}
//Math

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

//Time alert 

let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}

//Cheese


function favoriteAnimal(animal) {
    return animal + " are my favorite animal!"
  }
 
  console.log(favoriteAnimal('Frogs'))


  const myArray = ["I", "love", "chocolate", "frogs"];
  const madeAString = myArray.join(" ");
  console.log(madeAString);
  // returns 'I love chocolate frogs'
  
  const madeAnotherString = myArray.join();
  console.log(madeAnotherString);
  // returns 'I,love,chocolate,frogs'


/**
 * The code below tells the browser to ask you for a number
 * then if that number is `6`, it returns `true` otherwise it returns `false`
 * 
 * Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10
 */

number = Number(prompt("Enter your age"));

function numberChecker() {
	if(number === 6) {
		return true;
	} else {
		return false;
	}
}

var bankAccount = 200;
var deposit = 150;
var total = bankAccount + deposit;

var greeting = "Welcome Back: ";
var name = "Jessie";
alert(greeting+name);

console.log("Hey I'm in the console.");
//console.log() is the command to print something to the developer console (browser)use to print the results from following articles and exercises to the console
//     \n start a new line \t gives me a tab over
//mod or modulo is a percent sign "%" and gives you the remainder of a math equation
//Scope - When you create a function, the variables and other things
// defined inside the function are inside their own separate scope,
//meaning that they are locked away in their own separate compartments,
//unreachable from code outside the functions. 
//The top level outside all your functions is called the global scope.
//Values defined in the global scope are accessible from everywhere in the code
//Variables are storage containers for data in your code [var, let, and const
//index: hello > h index 0 // e index 1 // ll index 2 // l index 3 // o index 4
//grab the letter d in the string, "look at the dog" ----- d is index 12
//8 data types of JS: Number, String, Boolean T/F logic
//Undefined var declared but has no assigned value, Null intentional absence of any object value
//Symbol represents a unique value that's not equal to any other value, Object represents a collection of properties, and each property is a key-value pair
//BigInt represents integers with arbitrary precision
//JS is a dynamically typed language, meaning that you don't have to specify the data type of a variable when you declare it.
const a = "Hello";
const b = "World";
console.log(a,b);


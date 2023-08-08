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
//console.log() is the command to print something to the developer console (browser)
//use to print the results from following articles and exercises to the console

//     \n start a new line
//     \t gives me a tab over
//mod or modulo is a percent sign "%" and gives you the remainder of a math equation
//Scope - When you create a function, the variables and other things
// defined inside the function are inside their own separate scope,
//meaning that they are locked away in their own separate compartments,
//unreachable from code outside the functions. 
//The top level outside all your functions is called the global scope.
//Values defined in the global scope are accessible from everywhere in the code
   
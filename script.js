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

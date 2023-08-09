// When a user inputs a number Loop from 1 to the entered number
//If the current number is divisible by 3 then print "Fizz"
//If the current number is divisible by 5 then print "Buzz"
//If the current number is divisible by 3 and 5 then print "FizzBuzz"
//Otherwise print the current number

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
//Note: Wrap the prompt in a parseInt function so a number is returned from the user’s input

// for (let i = 1; i <= answer; i++) {
//    console.log(i);
  

//Declare variable i & assign it 1: the initial value of the variable i in our loop 
//(NOTE: Most of the time, programmers find themselves looping from 0. Due to the needs of our program, we’re starting from 1)
//The second clause, i <= answer is our condition. We want to loop until i is greater than answer
//The third clause, i++, tells our loop to increment i by 1 every iteration. As a result, if the user inputs 10, this loop would print numbers 1 - 10 to the console

// if (i % 3 === 0) {
//    console.log("Fizz");
//mod operator(%)here to divide num/3 -returns the remainder, if remainder is 0 then current number is divisible by 3 will print "Fizz"

//} else if (i % 5 === 0) {
//    console.log("Buzz");
//mod operator(%) divide num/5, if remainder is 0 then its divisible by 5 and will print "Buzz"


//  } else {
//    console.log(i);
//This part is just to print the numbers that are neither divisible by 3 or 5.

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

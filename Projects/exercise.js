//Convernt number in pounds (lb) to kilograms (kg).
var lbs = prompt("Weight in pounds (lbs)?");
var kg = lbs*0.454;
alert("That equals: "+kg+" kilograms");
console.log("Conversion Complete!");

//Operators Exercise
// === instead of ==
// && (and) || (or)  !(not)  !== (not equal to)
var x = 1
var y = 2

//exercise1
"2" == y && x === 1;
//return true
//exercise2
x >= 0 || y === "2";
//return true 
//exercise3
!(x !== 1) && y === (1+1);
//return true
//exercise4
y !== "2" && x < 10;
//return true

//Control Flow Exercise
//IF statment
// if(condition){
    //Execute code
// }else{
    //Execuite some other code
//IF, ELSE IF, ELSE statement 
// if (condition one){
    //Execute code
// }else if(condition two){
    //Execute other code
// }else{
    //execute backup code
// }

// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "Multiple JS exercises will consist on this page!";

container.appendChild(content);


const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");
btn.addEventListener("click", function (e) {
    console.log(e.target);
  });
  
  btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });
  

  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

//Event Bubbling: An event flows from target element up to the root element.
//Event Capturing:An event flows from the root element down to the target element.
//event.preventDefault() = method used to prevent the default action of an event.
//event.stopPropagation() = method used to stop an event from propagating to parent element.
//event.stopImmediatePropagation() = method to stop event from being handled by any other handlers in the current target.
//Event handler is a function that is called when an event occurs.
//To add event listener for a click event button: button.addEventListener('click', function() {...});

//What will the following code do?
document.getElementById('myLink').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Link clicked!');
  });
//The default action of the link will be prevented, and an alert will be shown

//In which phase is the event target itself handled in event propagation? Target phase
//What is the correct order of event phases in the W3C model? Capturing phase, Target phase, Bubbling phase


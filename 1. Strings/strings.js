// alert("hello")
// document.getElementById("welcomeHeader").innerHTML = "Welcome to Intro to Programming"; 

function clickMe(){
    document.getElementById("welcomeHeader").innerHTML = "Programming is Awesome!"; 
}

function unClickMe(){
    document.getElementById("welcomeHeader").innerHTML = "Mr. Sekol is pretty much the coolest teacher ever."; 
    // window.alert("Coding Time.")
}

// OutPut 
// Writing into an HTML element, using innerHTML.
// Writing into the HTML output using document.write().
// Writing into an alert box, using window.alert().
// Writing into the browser console, using console.log().

console.log(3*5);
document.writeln(20*5);
document.write("Hello class. You're awesome too.");

var x = 5;
var y = 6;
var xSqaured = Math.pow(x, 2);
var ySquared = Math.pow(y, 2);
var z = Math.sqrt(xSqaured + ySquared);
console.log(x * y);
console.log(xSqaured+ySquared);
console.log(z);


alert("Hello, what is your name?");
var userName = prompt("What is your name?");
alert("Hello " + userName +" , it is a pleasure to have you in class. ");
alert("Hello ${userName} , it is a pleasure to have you in class. ");

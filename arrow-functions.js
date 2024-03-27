/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
//     // Adding two numbers
//     return a + b;
// }

// // Call the function to get the sum of 3 and 5
// let sum = addTwoNumbers(3, 5);

// // Log the sum to the console to confirm
// console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
// Adding two numbers
    return a + b;
}
    
// Call the function to get the sum of 3 and 5
// let sum = addTwoNumbers(3, 5);
// console.log(sum);


// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(6, 4);
console.log(sum2);
// Implicit Returns
//     //Function to say something
function saySomething(message) {
    console.log(message);
}

//    //Call the function to say "Hello There!"
saySomething("Hello There!");

//     //Arrow function to say hello
const sayHello = () => console.log("Hello");

//     //Call the arrow function to say "Hello"
sayHello();


// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    </p>`
)
console.log(returnMultipleLines());

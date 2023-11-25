// Method below is the best as it ensures separation of concerns, 
// and we also allow multiple event listeners if the need arises
// const btn = document.querySelector('btn')
// onclick = () => alert("Goodbye Nana")
// btn4.addEventListener('click', onclick )

// RECAP arrow functions

//let func = (arg1, arg2, ..., argN) => expression
// Ex1   let double = n => n * 2;

// Ex2
/*
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();
*/

// Multiline arrow functions

let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };

// MULTIPLE buttons

const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
// // onclick = () => alert("Goodbye Nana")
// btn1.addEventListener('click', onclick )
// btn1.addEventListener('click', onclick )
// btn1.addEventListener('click', onclick )

// function alertFunction() {
//   alert("YAY! YOU DID IT!");
// }

// btn1.onclick = alertFunction

// btn2.addEventListener('click',alertFunction )

btn2.addEventListener('click',function(e) {
  e.target.style.background = 'blue';
});
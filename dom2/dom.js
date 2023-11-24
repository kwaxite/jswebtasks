const container = document.getElementById('container')


const controls = document.getElementsByClassName('controls')

const display = document.querySelector('.display')
// console.log(display.nextElementSibling) 

// create a new element

const div = document.createElement('div')
// this function does not put the new element into the DOM - it simply creates it in memory
// This is so that you can manipulate the element 
// (by adding styles, classes, ids, text, etc.) before placing it on the page. 

//  place the element into the DOM with one of the following methods

// Append elements
container.appendChild(div)
div.innerText = 'Hello Dolly'

// const display = document.querySelector('.display')

// console.log(container.insertBefore(div, display))

// div.style.color = "blue";


console.log(div.style.cssText = 'color: red; background: green')
div.style.fontSize = '5rem'

div.setAttribute('class', 'newDiv')
console.log(div)

console.log(container.getAttribute('id'))

const div2 = document.createElement('div')
console.log(container.insertBefore(div2,display))

div2.classList.add('nana')
console.log(div2)
console.log(container.childNodes)
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

div2.textContent = "I can't believe this";
div2.style.color = "purple";
div2.style.cssText = "color: blue; background: yellow";
div2.style.border = 'solid';

const para = document.createElement('p')
console.log(para)
container.appendChild(para)
console.log(container)
para.textContent = "Hey I am red";
para.style.color = "red";

const hthree = document.createElement('h3')
container.insertBefore(hthree, div2)

hthree.textContent = "I’m a blue h3!";
hthree.style.cssText = "color: blue; background: lightgreen"
const div3 = document.createElement('div')
container.appendChild(div3)

div3.setAttribute('class', 'div3')
console.log(container)

const hnew1 = document.createElement('h3')
div3.appendChild(hnew1)
console.log(div3)
hnew1.textContent = "I’m in a div";

const btn = document.querySelector('.btn')



function clickMe() {
    alert("Hello World")
}

// btn.addEventListener("click", clickMe);

// METHOD 3
// btn.addEventListener('click', clickMe);
btn.addEventListener('click', function (e) {
    console.log(e);
  });
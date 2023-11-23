const title = document.getElementById('main-heading');
console.log(title)

const list = document.getElementsByClassName('list-items')
console.log(list)

const tagNames = document.getElementsByTagName('li')
console.log(tagNames)

//query selector - accepts all CSS style selectors. 
//Use to select the first item that matches the selector it's given.
// can be used to select any css style element

const container = document.querySelector('div')
console.log(container) // so it selects the div with the class container. 

const allDivs = document.querySelectorAll('div')
console.log(allDivs)  // this one selects all the divs

// creating elements
const ul = document.querySelector('ul') // assign ul you will create list from
const li = document.createElement('li') // create new list item
//now append new list item in the ul
ul.append(li)

// add text to new list item
li.innerText = 'X-Superman'

// // modifying Attributes and classes
// li.setAttribute('id', 'main-heading')

// // to remove attribute
// li.remove('id')

// // using classlist property to add items
li.classList.add('list-items')
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
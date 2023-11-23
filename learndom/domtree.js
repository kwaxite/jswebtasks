// PART 2 - STYLING elements
// Steps 
// 1. select element 
// 2. add property you want using dot notation

const title = document.querySelector('#main-heading');
title.style.color = 'yellow';
// note that this is an example of an inline styling
//So will not work for more than one element
//Must you iteration (loop) if you want to use this for many elements.

// example of how to apply inline styling to MULTIPLE elements
const listItems = document.querySelectorAll('.list-items')
for (let i=0; i<listItems.length; i++){
    listItems[i].style.fontSize = '2rem'
}
console.log(listItems)
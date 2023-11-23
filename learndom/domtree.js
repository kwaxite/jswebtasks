// 4a - Parent node traversal - going up the DOM tree
let ul = document.querySelector('ul')

// 2 options to find parent node
console.log(ul.parentNode) // example1
console.log(ul.parentElement) // example2

// 2 options to find Grand-parent node
console.log(ul.parentNode.parentNode) // example1
console.log(ul.parentElement.parentElement) // example2

// 2 options to find child
console.log(ul.childNodes) // example1 - gives 11 nodes
console.log(ul.children) // example2 - gives 5 children
// Above example shows the difference betweeb elements and nodes
// text are counted as nodes

ul.children[1].style.backgroundColor = "red"; // bcos its arraylike 
ul.children[1].style.color = "yellow";

// child node travesal
console.log(ul.firstChild)
console.log(ul.firstElementChild)
ul.firstElementChild.style.color = 'blue'
// ul.firstChild.style.color = 'blue' // gives error as first node is an indentation

// sibling traversal
console.log(ul.previousSibling)
console.log(ul.nextSibling)
console.log(ul.previousElementSibling)
console.log(ul.nextElementSibling)


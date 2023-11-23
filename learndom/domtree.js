// GetElementById() - to select element by id
// assign to a variable to be able to manipulate it

const title = document.getElementById('main-heading')
console.log(title)

// GetElementByClassName() - 

const listItems = document.getElementsByClassName('list-items')
console.log(listItems) // returns an array like object with all the classes

// getElementsByTagName()

const body = document.getElementsByTagName('body')
console.log(body)

// querySelector() - accepts all CSS style selectors
// selects the first one that matches
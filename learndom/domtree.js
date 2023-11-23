
// PART 3 - a. CREATING elements

const ul = document.querySelector('ul');
const li = document.createElement('li');

// b. add element - using append()
ul.append(li);

// c. modify element e.g. include text
li.innerText ='Superman'

// d. modifying attributes and classes
mainheading = document.querySelector('#main-heading')

li.setAttribute('id', 'main-heading');
li.removeAttribute('id')

li.classList.add('list-items') // this makes our new list item same as existing lists

// find out if an element has a specific class
console.log(li.classList.contains('list-items')) //returns true

// dif btn innerText, textContent, innerHTML
// innerText - displays the visible text
// textContent - display the same way as HTML file, e.g. will show indents if there is one in the HTML file
// innerHTML - similar to textContent, but also show any tags within. 
// innerHTML - security issues, user can gain access to js code and exploit it

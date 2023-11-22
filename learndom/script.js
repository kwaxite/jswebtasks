const body = document.body // 
body.append('hello ') // adds text to the body
// how to add an element to my page
const div = document.createElement("div") // 1. create a ref to an element
body.append(div) // 2. adds the element to the body
div.innerHTML= "<h1>Hello world</>" // allows you to add/modify html tags to your text
// div.innerHTML causes security issues - people can insert malicious code into your script
div.textContent = 'ooooo lala'


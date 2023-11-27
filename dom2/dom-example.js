
link = document.querySelector('a')
console.log(link)
link.textContent = "Mozilla developer network"
link.href = "https://developer.mozilla.org"

const section = document.querySelector('section')
console.log(section.children)

const para = document.createElement("p")
para.textContent = "I am enjoying this"
section.appendChild(para)

const text = document.createTextNode("— the premier source for web development knowledge. ");
const linkPara = document.querySelector("p")
linkPara.appendChild(text)

section.appendChild(linkPara)
section.cloneNode(section)
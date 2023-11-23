// Event listeners 
// a. Creat a click event
// 1st way is to add it inline. See html code

// 2nd way is create using a function
// eventlistner method takes 3 parameters: ("click", function,  

const buttonTwo = document.querySelector('#btn2');

function alertBtn() {
    alert('I also love JavaScript so much')
}

buttonTwo.addEventListener("click", alertBtn)

// b. Mouse over event

newBackgroundColor = document.querySelector(".box-3")

function changeBackColor(){
    newBackgroundColor.style.backgroundColor = "blue"
}

newBackgroundColor.addEventListener("mouseover", changeBackColor )
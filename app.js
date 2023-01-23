//Selecting individual elements
//-- getElementById

const list = document.getElementById("list")
// console.log(list)
// list.textContent = "Hello World!!!!!"
// list.textContent = "<h1>Hello World</h1>"
// list.innerHTML = "<h1>Hello World</h1>"

//--querySelector

const el = document.querySelector("ul li:nth-child(2)")
const icon = el.querySelector("p .fa-times")
icon.style.color = "yellow"

//-- loop over getElementsByClassName

const icons = document.getElementsByClassName("fa")
// console.log(icons)

for(let i = 0; i < icons.length; i++){
//  console.log(icons[i])
 icons[i].style.color = "blue"
}

// DOM Styles and Classes
const headerh2 = document.querySelector('header h2') //node
// console.log(headerh2);
// headerh2.className = "changeBg"
// headerh2.className = "changeFt"
// headerh2.className += " changeBg" //concatenation

headerh2.classList.add('changeBg')
headerh2.classList.add('changeFt')
headerh2.classList.remove('changeBg')

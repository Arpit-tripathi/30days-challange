let createDiv = document.createElement('div')
createDiv.innerHTML = 'javascript'
document.body.append(createDiv)


// task 4
let ul = document.getElementById('my-list')
let createLi = document.createElement('li')
createLi.textContent = "new-li"
ul.append(createLi)


const creBtn = document.createElement('button')
creBtn.innerText = "click-me"
document.body.append(creBtn)


const newUl = document.createElement('ul');
// newUl.textContent = 'new';
document.body.append(newUl)
const newLi = document.createElement('li');
newLi.textContent = "chai";
newUl.append(newLi)
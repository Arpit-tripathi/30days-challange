const change = function () {
    document.getElementById('title').innerHTML = "arpit tripathi"
    document.getElementById('title').style.backgroundColor = "pink"

}

change()


//this code will only change the only first element in the html collection but there is another node then it will not change the color


// const color = document.getElementsByClassName('para')
// color[0].style.backgroundColor = 'green'


//here is the code which change the all the element in the html collection

// const color = document.getElementsByClassName('para')
// for (let i = 0; i < color.length; i++) {
//     color[i].style.backgroundColor = 'green'

// }

const color = document.querySelectorAll('.para')
for (let i = 0; i < color.length; i++) {
    color[i].style.backgroundColor = 'green'

}
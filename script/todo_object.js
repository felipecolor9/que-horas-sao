let postit_name = window.document.getElementById('postit_name')
let postit_content = window.document.getElementById('postit_content')
let btn_adicionar = window.document.querySelector('button#btn_adicionar')
let btn_mostrar = window.document.querySelector('button#btn_mostrar')
var index = 0;
let postitList = new Array
btn_adicionar.addEventListener("click", addPostit)
btn_mostrar.addEventListener("click", mostrar)

function addPostit() {

    let postit = {
        name: postit_name.value,
        content: postit_content.value
    }
    postitList.push(postit)
    index++
}

function mostrar() {
    console.log(postitList[0])
}
let postitName = window.document.getElementById('postit_name')
let postitContent = window.document.getElementById('postit_content')
let btnAdd = window.document.querySelector('button#btn_adicionar')
let btnShow = window.document.querySelector('button#btn_mostrar')
let postList = new Array
let index = 0
btnAdd.addEventListener("click", addPostit)
btnShow.addEventListener("click", mostrar)

function addPostit() {

    if (postitName.value == '') {
        window.alert('Por favor, adicione um título')
    } else {

        let postit = {
            name: postitName.value,
            content: postitContent.value
        }
        postList.push(postit)
        attpostlist()
        clearInputs()
        index++
    }
}

function attpostlist() {
    let elementFather = document.getElementById('div1')
    let child = elementFather.firstChild
    let newElement = document.createElement("div");
    let lastIndex = postList.length - 1

    if (postList.length < 1) {
        lastIndex = 0;
    }

    newElement.innerHTML = "<strong>" + postList[lastIndex].name + "</strong>" + "<br><br><p><strong>Descrição:</strong> " + postList[lastIndex].content + "</p>"
    newElement.className = 'generatedDiv'
    newElement.id = 'div' + index

    let btnAlt = document.createElement("div")
    btnAlt.innerHTML = '<a><i class="fas fa-cog fa-2x"></i></a>'
    btnAlt.className = 'btn'
    btnAlt.id = index

    let btnExc = document.createElement("div")
    btnExc.innerHTML = '<a><i class="fas fa-trash-alt fa-2x"></i></a>'
    btnExc.className = 'btn'
    btnExc.id = index
    newElement.appendChild(btnExc)
    newElement.appendChild(btnAlt)

    elementFather.insertBefore(newElement, child)

    btnAlt.addEventListener('click', function newPopup() {


    })
    btnExc.addEventListener('click', function() {
        let confirmExc = confirm('Deseja remover?')

        if (confirmExc) {
            this.parentNode.remove()
            delete postList[parseInt(btnExc.id)]
        }
    })

}

function clearInputs() {
    postitName.value = ''
    postitContent.value = ''
}

function mostrar() {
    postList.forEach(element => {
        console.log(element)

    });
    console.log(postList.length)
        //metodo teste
}
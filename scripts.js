
const elements = {
    inputText: document.getElementById("imput-text"),
    lista: document.getElementById("lista")
}

function textFormatter(){
    let value = Number(elements.inputText.value)

    let textFormated = value.toFixed(2)

    return textFormated
}

let counter = 0
//Eventos
elements.link.addEventListener("click",()=>{

    counter++
    elements.numbers.textContent = counter
})


function init(){
    console.log(textFormatter())
}

init()

const elements = {
    inputText: document.getElementById("imput-text"),
    lista: document.getElementById("lista"),
    links: document.getElementsByClassName("link"),
    counters: document.getElementsByClassName("counter")
}

function textFormatter(){
    let value = Number(elements.inputText.value)

    let textFormated = value.toFixed(2)

    return textFormated
}

elements.lista.forEach(li => {
    li.dataset.count = 0
});


function init(){
    console.log(textFormatter())
}

init()
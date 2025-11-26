
const elements = {
    inputText: document.getElementById("imput-text")
}

function textFormatter(){
    let value = Number(elements.inputText.value)

    let textFormated = value.toFixed(2)

    return textFormated
}

function init(){
    console.log(textFormatter())
}

init()

const elements = {
    inputText: document.getElementById("imput-text")
}

function textFormatter(){
    const textFormated = elements.inputText.toFixed(2)

    return console.log(textFormated)
       

}

function init(){
textFormatter()
}

init()

    //Definir: Largura: ,Altura:
let altura = 0
let largura = 0
function redimensiconamento(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}
redimensiconamento()

//aleatoriedade do mosquito: Criar a imagem de um mosquito e colocá-la em uma posição aleatória na tela.
//Utilizei o Math.random pra geram um numero aleatorio entre 0 e 1, multiplicando assim pela largura( no caso essa multiplicação sempre vai ficar abaixo do limite ja que a multiplicação de casas decimais sempre da um numero menor do que o segundo produto)

function posicaomosquito(){

    // 1. Número aleatório
    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    // 2. Criar elementos HTML pelo JavaScript
    let mosquito = document.createElement('img')

    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoDoMosquito() +' '+ ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    // 3. Colocar o elemento criado na página
    document.body.appendChild(mosquito)
}

posicaomosquito()


    //tamanho do mosquito
function tamanhoDoMosquito(){

    let classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'    
        case 2:
            return 'mosquito3'
            }
}

    //lado do mosquto(aleatorio)
function ladoAleatorio(){

    let lados = Math.floor(Math.random()* 2)

    switch(lados){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
    }   
}


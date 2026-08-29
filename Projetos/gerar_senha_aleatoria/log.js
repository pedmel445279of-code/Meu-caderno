function gerarSenhar(){
    let quantCaracter= document.getElementById('tamanhoSenha').value
    let caracteres = "0132456789abcdefghijklmnopqrstuvwxyz_/;:~|"
    let senha = []
       
        caracterSeparado = caracteres.split('')
       
    for(let i = 1;i<=quantCaracter;++i){  //Repetir uma ação 10 vezes e, em cada repetição, gerar um número inteiro aleatório entre 0 e 9.
        
        let aleatoria = Math.floor(Math.random()*caracterSeparado.length) //Aqui ele vai pegar apenas um elemento do Array(quem vai pegar os outros vai ser o for).
       
        let senhaGuardada = caracterSeparado[aleatoria] //Está guantando em formato de Array a letras/numeros sortidas
        
        senha.push(senhaGuardada) // com o push ele adiciona ao final do array as letras/numeros sortidas.
        }
    let senhaFinal = senha.join('')
        document.getElementById('newSenha').textContent = senhaFinal
    }

    function dadosTela(){
        let largura = window.innerHeight
        let altura = window.innerWidth
        console.log(largura, altura)
    }
    dadosTela()
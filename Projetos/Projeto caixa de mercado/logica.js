
//LOJA
    //adiciona mais um item no carrinho (è ele quem conta quantos item tem no carrinho)
    let mais = 0
    let produtos = []
        //Adiciona um item em especifico no carrinho
        function produtosEspecificos(produto){
        produtos.push(produto)
            //Nesse trecho ele esta contando quantos itens tem
        mais++
    document.getElementById('contadorProdutos').textContent = mais
    }
        console.log(produtos)
//CADASTRO
    function dadosCadastro(){
        let nome = document.getElementById('name').value
        let CPF = document.getElementById('CPF').value
        let data = document.getElementById('data').value
        let celular = document.getElementById('numero').value
        let CEP = document.getElementById('CEP').value
        let Rua = document.getElementById('rua').value
        let casa = document.getElementById('casa').value
        let complemento = document.getElementById('complemento').value
        document.write("--Dados do Cliente--" +' <br></br>')
        document.write("Nome: " + nome + ' <br></br>')
        document.write("CPF: " + CPF)
        document.write("Data de nacimento" + data+ ' <br></br>')
        document.write("Número de celular: " + celular+' <br></br>')
        document.write("CEP da casa: " + CEP+' <br></br>')
        document.write("Nome da rua: " + Rua+' <br></br>')
        document.write("Número da casa: " + casa+' <br></br>')
        document.write("Complemento: " + complemento+' <br></br>')
    }
dadosCadastro()
    




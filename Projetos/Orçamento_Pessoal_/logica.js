function dados(){

    //Primeiro eu guardei os valores do inpot nas variaveis 
            let ano = document.getElementById('ano').value
            let mes = document.getElementById('mes').value
            let dia = document.getElementById('dia').value
            let tipo = document.getElementById('tipo').value
            let descricao = document.getElementById('descricao').value
            let valor =  document.getElementById('valor').value
    //segundo: criei um objeto com os parametros com os nomes da variavel e passei o nome delas pra os "this"
            class entradas{
                  constructor(ano,mes,dia,tipo,descricao,valor){
                      this.ano = ano
                      this.mes = mes
                      this.dia = dia
                      this.tipo = tipo
                      this.descricao = descricao
                      this.valor = valor
                  }
              }
    //terceiro: criei a identidade com os parametros com os nomes das cariaveis
              let despesa = new entradas(ano,mes,dia,tipo,descricao,valor)
            
              alert("Despesa salva com sucesso!")

              gravar(despesa)
}

    function gravar(d){

        localStorage.setItem('despesa' /*Identifição do Objeto que queremos armazenar*/,
             JSON.stringify(d) /*O dado que queros armazenar*/)

    }




/*

document.getElementById('ano').value
document.getElementById('mes').value
document.getElementById('dia').value
document.getElementById('tipo').value
document.getElementById('descricao').value
document.getElementById('valor').value*/
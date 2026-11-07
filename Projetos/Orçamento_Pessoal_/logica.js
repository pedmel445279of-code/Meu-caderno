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

                  validarDados(){
                    for(let i in this ){
                        if(this[i] == undefined || this[i] == "" || this[i] == null){
                            return false
                        }
                    }
                    return true
                  }

              }

              class Bd{

                constructor(){ //
                    let id = localStorage.getItem('id')

                    if(id === null){
                        localStorage.setItem('id', 0)
                    }
                }

                getProximoId (){
                  let proximoId = localStorage.getItem('id') //null
                  return parseInt(proximoId) + 1
                  }
                  
                gravar(d){

                    let id = this.getProximoId()
                    localStorage.setItem(id /*Identifição do Objeto que queremos armazenar*/,
                    JSON.stringify(d) /*O dado que queros armazenar*/)

                    localStorage.setItem('id',id)
                }

                recuperarTodosOsRegistros(){
                    console.log('Estamos chegando até aqui')
                }
            }
            
            let bd = new Bd()


            //terceiro: criei a identidade com os parametros com os nomes das cariaveis
            let despesa = new entradas(ano,mes,dia,tipo,descricao,valor)
            
            if(despesa.validarDados()){
                console.log("Despesa salva com sucesso!")
                alert('Dados Salvo com sucesso!')
            } else {
                console.log("Dados inválidos")
            }
            
            bd.gravar(despesa)

        }
        
        function carregaListaDespesas(){
            bd.recuperarTodosOsRegistros()
        }

    




/*

document.getElementById('ano').value
document.getElementById('mes').value
document.getElementById('dia').value
document.getElementById('tipo').value
document.getElementById('descricao').value
document.getElementById('valor').value*/
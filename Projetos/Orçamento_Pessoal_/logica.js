// 1. Definição da Classe de Entradas (Fora da função dados)
class Entradas {
    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = valor;
    }

    validarDados() {
        for (let i in this) {
            if (this[i] === undefined || this[i] === "" || this[i] === null) {
                return false;
            }
        }
        return true;
    }
}

// 2. Definição da Classe de Banco de Dados (Fora da função dados)
class Bd {
    constructor() {
        let id = localStorage.getItem('id');
        if (id === null) {
            localStorage.setItem('id', 0);
        }
    }

    getProximoId() {
        let proximoId = localStorage.getItem('id');
        return parseInt(proximoId) + 1;
    }
    
    gravar(d) {
        let id = this.getProximoId();
        localStorage.setItem(id, JSON.stringify(d));
        localStorage.setItem('id', id);
    }

    recuperarTodosOsRegistros() {
        let despesas = Array(); // Nome no plural para o array
        let id = localStorage.getItem('id');

        for(let x = 1; x <= id; x++){
            // Recupera o objeto individual do localStorage
            let despesa = JSON.parse(localStorage.getItem(x)); 

            if(despesa === null){
                continue; // Pula se houver algum registro nulo/apagado
            }

            // Adiciona o objeto recuperado dentro do array 'despesas'
            despesas.push(despesa); 
        }

        return despesas; // Retorna o array completo com todas as despesas

        // Aqui você pode buscar os dados do localStorage e exibir na tela
    }
}

// Instancia o banco globalmente para ser usado
let bd = new Bd();

// 3. Função principal chamada ao enviar o formulário
function dados() {
    let ano = document.getElementById('ano').value;
    let mes = document.getElementById('mes').value;
    let dia = document.getElementById('dia').value;
    let tipo = document.getElementById('tipo').value;
    let descricao = document.getElementById('descricao').value;
    let valor = document.getElementById('valor').value;

    let despesa = new Entradas(ano, mes, dia, tipo, descricao, valor);
    
    if (despesa.validarDados()) {
        bd.gravar(despesa);
        console.log("Despesa salva com sucesso!");
        alert('Dados Salvos com sucesso!');

        document.getElementById('ano').value = ''
        document.getElementById('mes').value= ''
        document.getElementById('dia').value= ''
        document.getElementById('tipo').value= ''
        document.getElementById('descricao').value= ''
        document.getElementById('valor').value= ''
    } else {
        console.log("Dados inválidos");
        alert('Preencha todos os campos corretamente!');
    }
}

// 4. Função global para carregar a lista (caso precise chamar no onload ou no HTML)
function carregaListaDespesas() {
    let despesa = Array()
    despesa = bd.recuperarTodosOsRegistros();

    let listaDespesas = document.getElementById('listaDespesas')

    despesa.forEach(function(d){
        let linha = listaDespesas.insertRow()

        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`
        linha.insertCell(1).innerHTML = d.tipo
        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = d.valor
    })
}




/*

document.getElementById('ano').value
document.getElementById('mes').value
document.getElementById('dia').value
document.getElementById('tipo').value
document.getElementById('descricao').value
document.getElementById('valor').value*/
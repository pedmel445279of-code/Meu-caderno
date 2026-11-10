// 1. Definição da Classe de Entradas
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

// 2. Definição da Classe de Banco de Dados
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
        let despesas = Array(); 
        let id = localStorage.getItem('id');

        for (let x = 1; x <= id; x++) {
            let despesa = JSON.parse(localStorage.getItem(x)); 

            if (despesa === null) {
                continue; 
            }
            
            despesas.push(despesa); 
        }

        return despesas; 
    } // <-- A chave fechava aqui antes incorretamente!


   //Metodo para filtrar e pesquisar coisas em especifico 
    pesquisar(despesa) {
        let despesasFiltradas = Array()
        despesasFiltradas = this.recuperarTodosOsRegistros();

        console.log(despesasFiltradas)
        console.log(despesa)

        //ano
        if(despesa.ano != ''){
            console.log('Filtro de ano')
            despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano)
        }
        //mes
        if(despesa.mes != ''){
            console.log('Filtro de mes')
            despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes)
        }
        //dia
        if(despesa.dia != ''){
        console.log('Filtro de dia')
            despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia)
        }
        //tipo
        if(despesa.tipo != ''){
            console.log('Filtro de tipo')
            despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo)
        }
        //descricao
        if(despesa.descricao != ''){
            console.log('Filtro de descricao')
            despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao)
        }
        //valor
        if(despesa.valor!= ''){
            console.log('Filtro de valor')
            despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor)
        }
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

        document.getElementById('ano').value = '';
        document.getElementById('mes').value = '';
        document.getElementById('dia').value = '';
        document.getElementById('tipo').value = '';
        document.getElementById('descricao').value = '';
        document.getElementById('valor').value = '';
    } else {
        console.log("Dados inválidos");
        alert('Preencha todos os campos corretamente!');
    }
}

// 4. Função global para carregar a lista
function carregaListaDespesas() {
    let despesas = bd.recuperarTodosOsRegistros();
    let listaDespesas = document.getElementById('listaDespesas');

    // Limpa a tabela antes de carregar para evitar duplicatas se chamado várias vezes
    listaDespesas.innerHTML = '';

    despesas.forEach(function(d) {
        let linha = listaDespesas.insertRow();

        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`;
        linha.insertCell(1).innerHTML = d.tipo;
        linha.insertCell(2).innerHTML = d.descricao;
        linha.insertCell(3).innerHTML = d.valor;
    });
}

function pesquisarDespesa() {
    let ano = document.getElementById('ano').value;
    let mes = document.getElementById('mes').value;
    let dia = document.getElementById('dia').value;
    let tipo = document.getElementById('tipo').value;
    let descricao = document.getElementById('descricao').value;
    let valor = document.getElementById('valor').value;

    let despesa = new Entradas(ano, mes, dia, tipo, descricao, valor);

    bd.pesquisar(despesa);
}




/*

document.getElementById('ano').value
document.getElementById('mes').value
document.getElementById('dia').value
document.getElementById('tipo').value
document.getElementById('descricao').value
document.getElementById('valor').value*/
ErrosFrequntes/Soluções

---------------------ERRO COM TELA DE FUNDO DISTORCIDA:-------------------------

    No css
            body {
            /* Define a imagem que será usada como fundo da página */
            background-image: url('imagens/cenario.png');

            /* Faz a imagem cobrir toda a tela, mantendo sua proporção */
            background-size: cover;

            /* Mantém a imagem centralizada na tela */
            background-position: center;

            /* Impede que a imagem de fundo fique se repetindo */
            background-repeat: no-repeat;

            /* Faz o body ocupar 100% da largura da tela */
            width: 100vw;

            /* Faz o body ocupar 100% da altura da tela */
            height: 100vh;

            /* Remove a margem padrão que o navegador coloca no body */
            margin: 0;
            }

Uso do grid no CSS:

    display: grid;                       /* Ativa o Grid */
    grid-template-columns: 1fr 1fr;      /* Define as colunas (fr = fração)*/
    grid-template-rows: 100px 100px;     /* Define as linhas */
    gap: 10px;                           /* Espaço entre os elementos */

    Uma forma mais curta:
    grid-template-columns: repeat(3, 1fr);
        Significa: repita 3 vezes uma coluna de 1fr.

Uso do flex no CSS:

    display: flex;              /* Ativa o Flexbox */
    flex-direction: row;        /* Define a direção */
    justify-content: center;    /* Alinha no eixo principal */
    align-items: center;        /* Alinha no outro eixo */
    gap: 10px;                  /* Espaço entre elementos */
    flex-wrap: wrap;            /* Permite quebra de linha */

                justify-content: flex-start;     /* Começo */
                justify-content: center;         /* Centro */
                justify-content: flex-end;       /* Final */
                justify-content: space-between;  /* Espaço entre os elementos */
                justify-content: space-around;   /* Espaço ao redor */
                justify-content: space-evenly;   /* Espaços iguais */

                flex-start
                [1][2][3]----------------

                center
                --------[1][2][3]--------

                flex-end
                ----------------[1][2][3]

                space-between
                [1]--------[2]--------[3]


                align-items: flex-start;
                align-items: center;
                align-items: flex-end;


--------------------------PROBLEMAS COMUNS NO JAVASCRIP:----------------------


Contador em segundos:

    Logica:
        numero começa em 120
        a cada 1 segundo:
        mostrar numero
        diminuir 1
        se chegar em 0:
        parar

    Codigo:

        let a1 = 120 //Variavel com o total do tempo.
        setInterval(
            function facil(){ //Codigo com os parametros.
                if(a1 => 0){
                    console.log(a1)
                    --a1
                }
            }
        ,1000) //tempo em milisegundos.

Metodos de salvamento:

localStorage.setItem()	//Salva
localStorage.getItem()	//Recupera
localStorage.removeItem()	//Apaga um item
localStorage.clear()	//Apaga tudo




-------------------------------SOMA TOTAL EM UM LOOP — JAVASCRIPT-------------------------------------

Para somar vários valores durante um loop, usamos uma variável chamada ACUMULADOR.

O acumulador é uma variável que guarda o resultado da soma e vai aumentando a cada repetição do loop.

Normalmente começamos o acumulador com 0:

let soma = 0

Dentro do loop usamos:

soma += valor

Isso é uma forma resumida de escrever:

soma = soma + valor


EXEMPLO COM WHILE:

let numero = 1
let soma = 0

while (numero <= 10) {
    soma += numero
    numero++
}

console.log(soma)


COMO FUNCIONA:

O numero começa em 1 e a soma começa em 0.

numero = 1 → soma = 0 + 1 = 1
numero = 2 → soma = 1 + 2 = 3
numero = 3 → soma = 3 + 3 = 6
numero = 4 → soma = 6 + 4 = 10
numero = 5 → soma = 10 + 5 = 15
...
numero = 10 → soma = 45 + 10 = 55

Resultado final:

soma = 55


IMPORTANTE:

A variável soma deve ser criada FORA do loop:

let soma = 0

while (...) {
    soma += valor
}

Se criarmos "let soma = 0" dentro do loop, ela voltará para 0 a cada repetição e não conseguirá acumular os valores.


EXEMPLO SOMANDO QUADRADOS:

let numero = 1
let soma = 0

while (numero <= 10) {
    soma += numero * numero
    numero++
}

console.log(soma)

Nesse caso estamos fazendo:

1² + 2² + 3² + 4² + ... + 10²

O resultado será:

385


RESUMINDO:

Loop = percorre/gera os valores.

Acumulador = guarda o total.

soma += valor = pega o total anterior, adiciona o valor atual e guarda o novo total.

numero++ = aumenta o número em 1 para continuar o loop.

Estrutura básica:

let soma = 0

while (condição) {
    soma += valor
}

REGRA PARA LEMBRAR:

soma += valor

é igual a:

soma = soma + valor
        



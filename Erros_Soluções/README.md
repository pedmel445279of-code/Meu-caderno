ErrosFrequntes/Soluções

ERRO COM TELA DE FUNDO DISTORCIDA:

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




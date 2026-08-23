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
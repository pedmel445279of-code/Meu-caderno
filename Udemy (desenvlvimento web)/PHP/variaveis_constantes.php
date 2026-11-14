<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    
        //As constante nao podem ser alteradas.
        //define('NOME_CONSTANTE','codigo_constante')

        define('BD_URL','endereco_bd_dev');
        define('BD_USUARIO','usuario_bd_dev');
        define('BD_SENHA','senha_bd_dev');

        echo BD_URL . '<BR/>';
        echo BD_USUARIO . '<BR/>';
        echo BD_SENHA . '<BR/>';

    ?>
    
</body>
</html>
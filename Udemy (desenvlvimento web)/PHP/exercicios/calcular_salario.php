<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php

        $funcionario = 'Maria';
        $salario = 2100;
        $percentual = 0.1;
        $aumento = $salario + ($salario * $percentual);

        echo 
        'Nome: ' . $funcionario . '<br/>' .
        'Salario Atual: ' . $salario . '<br/>' .
        'Aumento de 10% ' . '<br/>' . 
        'Salario atual: ' . $almento;
    ?>
    
</body>
</html>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    //string
    $nome = 'Pedro Henrique';

    //int
    $idade = 20;

    //float
    $peso = 75.4;

    //boolean
    $fummante_sn = true; // (true = 1; false = vazio)


    $idade = 21;
    ?>
    
    <h1>Ficha cadastral</h1><br>
    <p>Nome: <?= $nome ?></p>
    <p>Idade: <?= $idade ?></p>
    <p>Peso: <?= $peso ?></p>
    <p>Fumante: <?= $fummante_sn ?></p>


</body>
</html>
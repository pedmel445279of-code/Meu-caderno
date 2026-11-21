<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

    $parametro = 2;

    switch($parametro){
    case 1:
        echo ('Entrou no case 1');
        break;
    case 2:
        echo ('Entrou no case 2');
        break;
    case 3:
        echo ('Entrou no case 3');
        break;
    case 4:
        echo ('Entrou no case 4');
        break;

        default:
        echo ('Sem casos');
        break;
    }

    ?>
</body>
</html>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php
    $idadeMinima = 18;
    $atividadeConta = true;
    $autorizacao = 'ADM';
    
    $nome = 'Pedro';
    $cargo = 'Supervisor' ;
    $idade = 20;
    $conta = true;
    
    echo 'Acesso: ';
    if($idade >= 18 && $conta == $atividadeConta &&  $cargo == $autorizacao){
        echo 'Altorizado';
    } else {
        echo 'Não Altorizado';
    }

    ?>
    
</body>
</html>
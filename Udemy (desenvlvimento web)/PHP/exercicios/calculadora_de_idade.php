<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php
    
        $nome = 'Marcos';
        $data_nacimento = '2010';
        $ano_atual = '2026';
        $idade = $ano_atual - $data_nacimento ;

        if($idade <18){
            echo $nome . '<br/>';
            echo $data_nacimento. '<br/>';
            echo 'Menor de idade'. '<br/>';
        } else {
            echo $nome. '<br/>';
            echo $data_nacimento. '<br/>';
            echo 'Maior de idade'. '<br/>';
        }
    ?>

</body>
</html>
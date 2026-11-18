<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    
    $mage_salarial = 61823;

    if($mage_salarial <= 1500){
    echo 'Salário Baixo';
    }else if($mage_salarial >= 1501 && $mage_salarial <= 3000){
        echo 'Salário Médio';
    } else if($mage_salarial >= 3001 && $mage_salarial <= 5000){
    echo 'Salário Bom';
    } else if($mage_salarial > 1501){
        echo 'Salário alto';
    }
    
    ?>
    
</body>
</html>
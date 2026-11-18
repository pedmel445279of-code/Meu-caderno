<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php

    $valorCompra = 643;

    $desconto = $valorCompra * 0.1;

    $frete;


    echo 'O valor da compra foi de ' . $valorCompra . '. Mas ouve um desconto de ' . $desconto . '</br>' . 'O valor ficou: ';
    if($valorCompra >= 200 && $valorCompra <= 400){
        echo ($valorCompra - $desconto) . '</br>';
        $frete = false ;
        echo 'A uma cobrança de frete nesse pedido';
    } else if($valorCompra >= 401){
        echo ($valorCompra - $desconto) . '</br>';
        $frete = true;
        echo'O frete é gratis';
    }

?>
    
</body>
</html>
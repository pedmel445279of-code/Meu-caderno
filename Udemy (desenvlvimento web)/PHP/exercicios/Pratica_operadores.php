<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    
    $valorCompra = 350;
    $desconto = 0.1;

    $valorCompra > 300 ? echo ($valorCompra * $desconto) : echo 'descontos acima de 300 reais';

    ?>
</body>
</html>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    //<condicao> ? verdadeiro : falso
    /*
    $idade =  10;

    echo $idade >= 18 ? 'Maior de idade' : 'Menor de idade';
    if($idade >= 18){
        echo 'Maior de idade';
    } else {
        echo 'Menor de idade';
    }
    */
    $nome = 'Carlos';
    $salario = 3500;
    $tempoEmpresa = 1;
    $avaliacao = 5;
    $adicional = $salario;

    echo $nome . '</br>';  
    echo 'Salário base: ' . $salario . '</br>';  
    echo ($tempoEmpresa >= 3 && $tempoEmpresa < 5  ? 'Bonos de 10% salário: ' . ($adicional = ($salario * 0.1) + $salario) : '' . '</br>');
    echo ($tempoEmpresa >= 5 ? 'Bonos de 15% salário: ' . ($adicional = ($salario * 0.15) + $salario) . '</br>': '' . '</br>');
    

    echo ($avaliacao >= 8 ? 'Adiciona mais R$500 no salario ficando: ' . ($adicional + 500) . '</br>' : 'Sem bonos adicionais' . '</br>');
    
    if($adicional > 4000){
        echo ('Categoria A');
        } else if($adicional >=3000 && $adicional < 4000){
            echo ('Categoria B');
        } else { 
        echo ('Categoria C');
    }
    ?>
</body>
</html>
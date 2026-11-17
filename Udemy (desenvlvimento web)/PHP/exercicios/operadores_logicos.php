<!DOCTYPE html>
<html lang="">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    
        $nome = 'Maria';
        $notaMinima = 7;
        $frequenciaMinima = 75;

        $nota = 6;
        $frequencia = 40;

        echo $nome . '</br>';
        if($nota >= $notaMinima && $frequencia >= $frequenciaMinima ){
            echo 'Aluno(a) Aprovado(a)!';
        } else if ($nota < $notaMinima || $frequencia < $frequenciaMinim){
            echo 'Está de recuperação!';
        } else {
            echo 'Reprovado(a)!';
        }
    ?>
</body>
</html>
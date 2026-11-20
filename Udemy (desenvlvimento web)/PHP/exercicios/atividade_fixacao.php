<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<!--1) Crie uma aplicação capaz de identificar se uma determinada pessoa pode ou não doar sangue.
Utilize as variáveis $idade e $peso no processo. Neste primeiro momento faça a atribuição de valores
as variáveis de forma estática, Ou seja, no prCQSS0 de atribuição.-->


    <?php
    $idade= 30;
    $peso=99;

   $aprovacaoSangue = $idade > 16 && $idade < 69 ? true : false; 
   $aprovacaoPeso = $peso> 50 ? true : false; 
    
   echo($aprovacaoPeso == true && $aprovacaoSangue == true ? 'Atende aos requisitos' : 'Não atende aos requisitos')
    ?>
</body>
</html>
programa
{
	
	funcao inicio()
	{
		//variaveis: cadeia, real, inteiro, logico, caracter
		//se(){}senao{}
		//enquanto() 
		//faca{}enquanto()
		//para(){}
		//const variavel nomeVariavel
		//escreva console
		//escolha(){caso1,caso2...}
		//leia(nomeVariavel)
		
		cadeia clienteVegetariano, nomeCliente, tipoCardapio, formaPagamento
		inteiro numeroMessa, numeroPedido
		escreva("Insita seu nome:")
		leia(nomeCliente)
		escreva("Escreva o número da sua messa:")
		leia(numeroMessa)
		escreva("Você que um tipo de cardápio vegetariano (“sim” ou “não”)")
		leia(clienteVegetariano)
		se(clienteVegetariano == "sim"){
			tipoCardapio = "Cardápio vegetariano"
				escreva("Escolha em um dos pratos:\n")
				escreva("Prato 1: Legumes souté\n")
				escreva("Prato 2: Legumes cleralhos\n")
				escreva("Prato 3: Salada expres\n")
				escreva("Prato 4: Salada da casa\n")
				escreva("Prato 5: Salada especial\n")
				escreva("Escreva o número do prato aqui:")
			leia(numeroPedido)
			} senao {
			tipoCardapio = "Cardápio nutritivo"				
			escreva("Escolha em um dos pratos:\n")
				escreva("Prato 1: Filer de tilapia gredado com legumes\n")
				escreva("Prato 2: File de frango grelhado\n")
				escreva("Prato 3: Tiras de frango com brócoles\n")
				escreva("Prato 4: File de frango grelhado com vinagrete\n")
				escreva("Prato 5: File de peixe com salada expres\n")
				escreva("Escreva o número do prato aqui:")
			leia(numeroPedido)
		}


		escreva("forma de pagamento dinheiro/cartão")
		leia(formaPagamento)

		se(formaPagamento == "dinheiro"){
			formaPagamento = "Dinheiro"
			escreva("O cliente tem 15% de desconto")
		} senao{
			formaPagamento = "Cartão"
		}
		
		escreva("Nota fiscal:\n")
		escreva("Nome do cliente: "+ nomeCliente  + "\n")
		escreva("Número da messa: " + numeroMessa  + "\n")
 		escreva("Modalidade de cardápio: " + tipoCardapio + "\n")
		escreva("Prato escolido pelo cliente: "+ numeroPedido + "\n")
		escreva("Forma de pagamento: " + formaPagamento)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1978; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */
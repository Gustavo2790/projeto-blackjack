
console.log("Boas vindas ao jogo de BlackJack!") 
 
comprarCarta()
            
if (confirm("Quer iniciar uma nova rodada?")) {
   let carta1Usuario = comprarCarta()
   let carta2Usuario = comprarCarta()
   let valorUsuario = carta1Usuario.valor + carta2Usuario.valor
   console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - pontuação: ${valorUsuario}`)
   let carta1Computador = comprarCarta()
   let carta2Computador = comprarCarta()
   let valorComputador = carta1Computador.valor + carta2Computador.valor
   console.log(`Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - potuação: ${valorComputador}`)
   if ((valorUsuario <= 21) && (valorUsuario > valorComputador)) {
      console.log("O usuário ganhou!")
   } else if (valorUsuario === valorComputador){
      console.log("Empate!")
   } else {
      console.log("O computador ganhou!")
   }

} else {
   console.log("O jogo acabou!")
}


 
 
 
 




comprarCarta()
const cartasUsuario = [comprarCarta(), comprarCarta()]
const cartasComputador = [comprarCarta(), comprarCarta()]

if (confirm("Bem-vinde ao jogo de Blackjack!\nQuer iniciar uma nova rodada?")) {
   let valorUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor
   let valorComputador = cartasComputador[0].valor + cartasComputador[1].valor

   let mensagem = confirm(`Suas cartas são ${cartasUsuario[0].texto} ${cartasUsuario[1].texto}. A carta revelada do computador é ${cartasComputador[0].texto}\nDeseja comprar mais uma carta?`)
   
   while (mensagem && valorUsuario <= 21){
      const novaCarta = comprarCarta()
      cartasUsuario.push(novaCarta)
      valorUsuario += novaCarta.valor

      let novasCartasUsuario = cartasUsuario.map((novaCarta) => {
         return novaCarta.texto
      })

      mensagem = confirm(`Suas cartas são ${novasCartasUsuario}. A carta revelada do computador é ${cartasComputador[0].texto}\nDeseja comprar mais uma carta?`)
             
   }
   
   let comprarCartaComputador = comprarCarta()
   
   while (valorComputador <= 21){
      const novaCarta = comprarCarta()
      cartasComputador.push(novaCarta)
      valorComputador += novaCarta.valor

      comprarCartaComputador++

      let novasCartasComputador = cartasComputador.map((novaCarta) => {
         return novaCarta.texto
      })
                  
   }

   if ((valorUsuario <= 21) || (valorUsuario < valorComputador)) {
      let novasCartasUsuario = cartasUsuario.map((novaCarta) => {
         return novaCarta.texto
      })

      let novasCartasComputador = cartasComputador.map((novaCarta) => {
         return novaCarta.texto
      })
      alert(`Usuário - Cartas: ${novasCartasUsuario} - Pontuação: ${valorUsuario}\nComputador - Cartas: ${novasCartasComputador} - Pontuação: ${valorComputador}\nO usuário ganhou!`)
   
   } else if (valorUsuario === valorComputador){
      let novasCartasUsuario = cartasUsuario.map((novaCarta) => {
         return novaCarta.texto
      })

      let novasCartasComputador = cartasComputador.map((novaCarta) => {
         return novaCarta.texto
      })
      alert(`Usuário - Cartas: ${novasCartasUsuario} - Pontuação: ${valorUsuario}\nComputador - Cartas: ${novasCartasComputador} - Pontuação: ${valorComputador}\nEmpatou!`)
   
   } else {
      let novasCartasUsuario = cartasUsuario.map((novaCarta) => {
         return novaCarta.texto
      })

      let novasCartasComputador = cartasComputador.map((novaCarta) => {
         return novaCarta.texto
      })
      alert(`Usuário - Cartas: ${novasCartasUsuario} - Pontuação: ${valorUsuario}\nComputador - Cartas: ${novasCartasComputador} - Pontuação: ${valorComputador}\nO computador ganhou!`)
   }
       
} else {
   alert("O jogo acabou!")
}
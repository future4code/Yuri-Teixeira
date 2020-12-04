/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log(`Bem vindo ao jogo de Blackjack!`);
if (confirm(`Quer iniciar uma nova rodada?`)) {

   //players
   let jogador1 = {
      cartas: [],
      stringCartas: '',
      pontuacao: 0
   }
   let jogador2 = {
      cartas: [],
      stringCartas: '',
      pontuacao: 0
   }
   //msg final
   let resultado = '';

   //compra inicial
   for (let index = 1; index <= 2; index++) {
      jogador1.cartas.push(comprarCarta())
      jogador2.cartas.push(comprarCarta())
   }

   //enquanto um dos dois ou os dois sairem com ases na mao, será sorteado novamente
   while (String(jogador1.cartas[0].texto).substring(0, 1) + String(jogador1.cartas[1].texto).substring(0, 1) === 'AA' ||
      String(jogador2.cartas[0].texto).substring(0, 1) + String(jogador1.cartas[1].texto).substring(0, 1) === 'AA') {
      for (let index = 1; index <= 2; index++) {
         jogador1.cartas.push(comprarCarta());
         jogador2.cartas.push(comprarCarta());
      }
   }

   //calculos de pontuação e criação da string de cartas
   for (const valor of jogador1.cartas) {
      jogador1.pontuacao += valor.valor;
      jogador1.stringCartas += valor.texto + ' ';
   }
   for (const valor of jogador2.cartas) {
      jogador2.pontuacao += valor.valor;
      jogador2.stringCartas += valor.texto + ' ';
   }

   //vez do jogador 1
   while (jogador1.pontuacao < 21 && confirm(`Suas cartas são ${jogador1.stringCartas}. A carta revelada do jogador 2 é ${jogador2.stringCartas.substring(0, 3)}.\n`
      + `Deseja comprar mais uma carta?`)) {
      jogador1.cartas.push(comprarCarta());
      jogador1.pontuacao += jogador1.cartas[jogador1.cartas.length - 1].valor;
      jogador1.stringCartas += jogador1.cartas[jogador1.cartas.length - 1].texto + ' ';
   }

   //vez do jogador 2
   while (jogador1.pontuacao < 21 && confirm(`Suas cartas são ${jogador2.stringCartas}. A carta revelada do jogador 1 é ${jogador1.stringCartas.substring(0, 3)}.\n`
      + `Deseja comprar mais uma carta?`)) {
      jogador2.cartas.push(comprarCarta());
      jogador2.pontuacao += jogador2.cartas[jogador2.cartas.length - 1].valor;
      jogador2.stringCartas += jogador2.cartas[jogador2.cartas.length - 1].texto + ' ';
   }

   //apuração dos resultados
   if (jogador1.pontuacao > 21 && jogador2.pontuacao <= 21) {
      resultado = `O jogador 2 ganhou! `
   }
   else if (jogador2.pontuacao > 21 && jogador1.pontuacao <= 21) {
      resultado = `O jogador 1 ganhou! `
   }
   else if (jogador1.pontuacao > jogador2.pontuacao && jogador1.pontuacao <= 21) {
      resultado = `O jogador 1 ganhou! `
   }
   else if (jogador2.pontuacao > jogador1.pontuacao && jogador2.pontuacao <= 21) {
      resultado = `O jogador 2 ganhou! `
   }
   else {
      resultado = `O jogo empatou!`;
   }

   //resultado
   prompt(`O jogador 1 saiu com as cartas: ${jogador1.stringCartas} e sua pontuação é: ${jogador1.pontuacao}\n` +
      `O jogador 2 saiu com as cartas: ${jogador2.stringCartas} e sua pontuação é: ${jogador2.pontuacao}\n` +
      resultado);
} else {
   console.log(`O jogo acabou!`);
}


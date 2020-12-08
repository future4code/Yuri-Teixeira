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

// console.log(`Bem vindo ao jogo de Blackjack!`);
// if (confirm(`Quer iniciar uma nova rodada?`)) {

//    let jogador1 = {
//       cartas: [],
//       stringCartas: '',
//       pontuacao: 0
//    }
//    let jogador2 = {
//       cartas: [],
//       stringCartas: '',
//       pontuacao: 0
//    }


//    for (let index = 1; index <= 2; index++) {
//       jogador1.cartas.push(comprarCarta())
//       jogador2.cartas.push(comprarCarta())
//    }

//    for (const valor of jogador1.cartas) {
//       jogador1.pontuacao += valor.valor;
//       jogador1.stringCartas += valor.texto + ' ';
//    }

//    for (const valor of jogador2.cartas) {
//       jogador2.pontuacao += valor.valor;
//       jogador2.stringCartas += valor.texto + ' ';
//    }

//    let resultado = '';

//    if (jogador1.pontuacao > jogador2.pontuacao && jogador1.pontuacao <= 21) {
//       resultado = `O jogador 1 ganhou! `
//    } else if (jogador2.pontuacao > jogador1.pontuacao && jogador2.pontuacao <= 21) {
//       resultado = `O jogador 2 ganhou! `
//    } else {
//       resultado = `O jogo empatou!`;
//    }

//    prompt(`O jogador 1 saiu com as cartas: ${jogador1.stringCartas} e sua pontuação é: ${jogador1.pontuacao}\n` +
//       `O jogador 2 saiu com as cartas: ${jogador2.stringCartas} e sua pontuação é: ${jogador2.pontuacao}\n` +
//       resultado);


// } else {
//    console.log(`O jogo acabou!`);
// }
// EXERCICIO 1
/*
Ele verifica se um numero é par, se ele for, o programa retorna "Passou no teste.", 
se ele for impar, ele retorna "Não passou no teste.".
*/

// EXERCICIO 2 
/*
a) Ele serve para consultar o preço de frutas
b) O preço da fruta "frutaInserida" é R$"0.00"
c) O preço da fruta Pêra é R$5
*/

// EXERCICIO 3
/*
a) Ela está solicitando que o usuário insira um dado e em seguida ela converte
o número em tipo número.
b) Se for maior que 0 retornaria a msg "Essa mensagem é secreta!!!, se for um
numero negativo, daria erro no codigo dizendo que "mensagem" is not defined.
c) Daria erro no codigo dizendo que "mensagem" is not defined, pois a variável
"mensagem" foi definida somente no escopo do IF.
*/

// EXERCICIO 4

/*
let idade = Number(prompt('Qual é a sua idade?'));

if (idade < 18) {
  console.log('Este cidadão ainda não pode dirigir.')
} else {
  console.log('Voce já pode dirigir');
}
*/

// EXERCICIO 5

/*
let turno = Number(prompt('Em qual período do dia vc estuda?'));

if (turno === 'M') {
  console.log('Bom dia!')
} else if (turno === 'V') {
  console.log('Boa tarde!');
} else if (turno === 'N') {
  console.log('Boa noite!');
} else {
  console.log('Algo de errado não está certo.');
}
*/

// EXERCICIO 6
/*
let turno = Number(prompt('Em qual período do dia vc estuda?'));

switch (turno) {
  case 'M':
    console.log('Bom dia!');
    break;
  case 'V':
    console.log('Boa tarde!');
    break;
  case 'N':
    console.log('Boa noite!');
    break;
  default:
    console.log('Algo de errado não está certo.');
    break;
}
*/

// EXERCICIO 7
/*
let genero = prompt('Qual é o genero do filme?').toLocaleLowerCase();
let valor = Number(prompt('Qual é o valor do ingresso?'));

if (genero === 'fantasia' && valor < 15) {
  console.log("Bom filme!");
} else {
  console.log('Escolha outro filme :(');
}
*/

// DESAFIO 1
/*
let genero = prompt('Qual é o genero do filme?').toLocaleLowerCase();
let valor = Number(prompt('Qual é o valor do ingresso?'));
let snack = Number(prompt('Qual snack vc irá comprar?'));

if (genero === 'fantasia' && valor < 15) {
  console.log(`Bom filme! ...com ${snack}`);
} else {
  console.log('Escolha outro filme :(');
}
*/

// DESAFIO 2

let dolar = 4.1;

let sf1 = 1320;
let sf2 = 880;
let sf3 = 550;
let sf4 = 220;

let dt1 = 660;
let dt2 = 440;
let dt3 = 330;
let dt4 = 170;

let fi1 = 1980;
let fi2 = 1320;
let fi3 = 880;
let fi4 = 330;

let nomeCompleto = prompt('Insira seu nome completo');
let tipoJogo = prompt('Insira o tipo do jogo').toUpperCase();
let etapaJogo = prompt('Insira a etapa do jogo').toUpperCase();
let categoria = Number(prompt('Insira a categoria'));
let qtdIngressos = Number(prompt('Insira a qtde de ingressos'));
let valorTotal = 0;
let valorIngresso = 0;
let moeda = 'R$';

switch (tipoJogo) {
  case 'DO':
    tipoJogo = 'Doméstico';
    break;
  case 'IN':
    tipoJogo = 'Internacional';
    break;
  default:
    tipoJogo = 'Não definido';
    break;
}

if (tipoJogo === 'Internacional') {
  moeda = 'U$';
}

switch (etapaJogo) {
  case 'SF':
    etapaJogo = 'Semifinais';
    break;
  case 'DT':
    etapaJogo = 'Decisão do 3° lugar';
    break;
  case 'FI':
    etapaJogo = 'Final';
    break;
  default:
    etapaJogo = 'Não definida';
    break;
}

if (categoria <= 0 || categoria >= 5 && typeof (categoria) !== Number) {
  categoria = 'Não definida'
}

if (tipoJogo === 'Doméstico' && etapaJogo === 'Semifinais') {
  switch (categoria) {
    case 1:
      valorTotal = sf1 * qtdIngressos;
      valorIngresso = sf1;
      break;
    case 2:
      valorTotal = sf2 * qtdIngressos;
      valorIngresso = sf2;
      break;
    case 3:
      valorTotal = sf3 * qtdIngressos;
      valorIngresso = sf3;
      break;
    case 4:
      valorTotal = sf4 * qtdIngressos;
      valorIngresso = sf4;
      break;
  }
} else if (tipoJogo === 'Doméstico' && etapaJogo === 'Decisão do 3° lugar') {
  switch (categoria) {
    case 1:
      valorTotal = dt1 * qtdIngressos;
      valorIngresso = dt1;
      break;
    case 2:
      valorTotal = dt2 * qtdIngressos;
      valorIngresso = dt2;
      break;
    case 3:
      valorTotal = dt3 * qtdIngressos;
      valorIngresso = dt3;
      break;
    case 4:
      valorTotal = dt4 * qtdIngressos;
      valorIngresso = dt4;
      break;
  }
} else if (tipoJogo === 'Doméstico' && etapaJogo === 'Final') {
  switch (categoria) {
    case 1:
      valorTotal = fi1 * qtdIngressos;
      valorIngresso = fi1;
      break;
    case 2:
      valorTotal = fi2 * qtdIngressos;
      valorIngresso = fi2;
      break;
    case 3:
      valorTotal = fi3 * qtdIngressos;
      valorIngresso = fi3;
      break;
    case 4:
      valorTotal = fi4 * qtdIngressos;
      valorIngresso = fi4;
      break;
  }
} else if (tipoJogo === 'Internacional' && etapaJogo === 'Semifinais') {
  switch (categoria) {
    case 1:
      valorTotal = (sf1 * qtdIngressos) / dolar;
      valorIngresso = sf1 / dolar;
      break;
    case 2:
      valorTotal = (sf2 * qtdIngressos) / dolar;
      valorIngresso = sf2 / dolar;
      break;
    case 3:
      valorTotal = (sf3 * qtdIngressos) / dolar;
      valorIngresso = sf3 / dolar;
      break;
    case 4:
      valorTotal = (sf4 * qtdIngressos) / dolar;
      valorIngresso = sf4 / dolar;
      break;
  }
} else if (tipoJogo === 'Internacional' && etapaJogo === 'Decisão do 3° lugar') {
  switch (categoria) {
    case 1:
      valorTotal = (dt1 * qtdIngressos) / dolar;
      valorIngresso = dt1 / dolar;
      break;
    case 2:
      valorTotal = (dt2 * qtdIngressos) / dolar;
      valorIngresso = dt2 / dolar;
      break;
    case 3:
      valorTotal = (dt3 * qtdIngressos) / dolar;
      valorIngresso = dt3 / dolar;
      break;
    case 4:
      valorTotal = (dt4 * qtdIngressos) / dolar;
      valorIngresso = dt4 / dolar;
      break;
  }
} else if (tipoJogo === 'Internacional' && etapaJogo === 'Final') {
  switch (categoria) {
    case 1:
      valorTotal = (fi1 * qtdIngressos) / dolar;
      valorIngresso = fi1 / dolar;
      break;
    case 2:
      valorTotal = (fi2 * qtdIngressos) / dolar;
      valorIngresso = fi2 / dolar;
      break;
    case 3:
      valorTotal = (fi3 * qtdIngressos) / dolar;
      valorIngresso = fi3 / dolar;
      break;
    case 4:
      valorTotal = (fi4 * qtdIngressos) / dolar;
      valorIngresso = fi4 / dolar;
      break;
  }
}

console.log(
  `--- DADOS DA COMPRA ---\n
 Nome do cliente: ${nomeCompleto}\n
 Tipo do jogo: ${tipoJogo}\n
 Etapa do jogo: ${etapaJogo}\n
 Categoria: ${categoria}\n
 Quantidade de ingressos: ${qtdIngressos} ingresso(s)\n
 --- VALORES ---\n
 Valor do ingresso: ${moeda}${valorIngresso}\n
 Valor total: ${moeda}${valorTotal}`
);

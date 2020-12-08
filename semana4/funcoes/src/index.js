
// EXEMPLO 1
//a) vai ser impresso 10 e 50;
//b) iria mostrar valores 10 e 50;

// EXEMPLO 2
//a) vai ser impresso Darvar e Caio;
//b) Amanda e caio;

// EXEMPLO 3
//a) Ele pega elementos de um array, verifica se o mesmo é par, caso seja, ele 
//insere no novo array ele multiplicado por ele mesmo;

// EXEMPLO 4
//a) 
function meuNome() {
  console.log(`Eu sou Yuri, tenho 25 anos, moro no Mato Grosso e sou estudante.`);
};
meuNome();

//b)
function meuNome2(nome, idade, cidade) {
  console.log(`Eu sou ${nome}, tenho ${idade} anos, moro no ${cidade} e sou estudante.`);
};
meuNome2('Yuri', '25', 'Mato Grosso');

// EXEMPLO 5
//a)
let soma = (a, b) => {
  return a + b;
}
console.log(soma(1, 2));

//b)
let verificacao = (a, b) => {
  if (a > b) {
    return 'O primeiro valor é maior do que o segundo';
  } else {
    return 'O primero valor é menor do que o primeiro';
  }
}
console.log(verificacao(1, 2));

//c)
let impressao = (txt) => {
  for (let index = 0; index < 10; index++) {
    console.log(txt);
  }
}
impressao('aaa');

// EXERCICIO 6
const _array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//a) 
function qtdElementos(array) {
  return array.length;
}
console.log(qtdElementos(_array));

//b)
function par(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(par(10));

//c)
let verificaParesArray = (array) => {
  let qtde = 0;
  for (const iterator of array) {
    if (iterator % 2 === 0) {
      qtde++;
    }
  }
  console.log(`Este array tem ${qtde} números pares.`);
}
verificaParesArray(_array);

// DESAFIOS
// EXERCICIO 1

//1)
let imprimir = (a) => {
  console.log(a);
}

//2)
let soma2 = (a, b) => {
  return a + b;
}
imprimir(soma2(5, 5));

// EXERCICIO 2
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13];

//a)
let paresPorDoiss = (array) => {
  let _array = [];
  for (const iterator of array) {
    if (iterator % 2 === 0) {
      _array.push(iterator * 2);
    }
  }
  return _array;
}
console.log(paresPorDoiss(numeros));

//b)
let maiorNumeroDeArray = (array) => {
  let maiorNumero = array[0];
  for (const iterator of array) {
    if (iterator > maiorNumero) {
      maiorNumero = iterator;
    }
  }
  return maiorNumero;
}
console.log(maiorNumeroDeArray(numeros));

//c)
let maiorIndice = (array) => {
  return array.length - 1;
}
console.log(maiorIndice(numeros));

//d)
let arrayInvertido = (array) => {
  let a = [];
  for (let i = array.length; i >= 0; i--) {
    a.push(array[i]);
  }
  return a;
}
console.log(arrayInvertido(numeros));


/* Exercícios de interpretação de código */

//1- ele vai preguntar pro usuário a cotação em dolar e vai trazer 
//o valor que ele inseriu em dolar.
//2- ele vai verificar o tipo de investimento inserido e multiplar pela taxa de juros
//3- vai verificar numeros pares e impares e se for par, ele insere no array1 se nao
//insere no  array2
//4- vai pegar o maior e o menor numero do array



/* Exercícios de Lógica de Programação */

//1-
let meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

console.log('\nprimeiro metodo');
for (let index = 0; index <= meuArray.length; index++) {
  console.log(index);
}
console.log('\nsegundo metodo');
for (const iterator of meuArray) {
  console.log(iterator);
}
console.log('\nterceiro metodo');
meuArray.forEach(p => {
  console.log(p);
})

//2-
//a)false
//b)false
//c)false
//d)false
//e)false

//3-
console.log('\nOs 5 primeiros números pares');
const quantidadeDeNumerosPares = 5;
let i = 1
while (i <= quantidadeDeNumerosPares) {
  console.log(i * 2)
  i++;
}
//o codigo do exercicio nao funciona pq quantidadeDeNumerosPares nao estava 
//definida e no IF ele nao estava incrementando o valor do indice.

//4-
let classificandoTriangulo = (a, b, c) => {
  if (a === b && a === c) {
    return `equilatero`
  } else if (a !== b && b !== c) {
    return `escaleno`
  } else {
    return `isoceles`
  }
}
console.log("\nTriangulo: " + classificandoTriangulo(3, 2, 2));

//5-
let verificadorDeNumeros = (a, b) => {
  let numeroMaior;
  let divisivelA;
  let divisivelB;
  let diferenca;

  if (a > b) {
    numeroMaior = a;
  } else {
    numeroMaior = b;
  }

  if (a % b === 0) {
    divisivelA = `é divisível`;
  } else {
    divisivelA = `não é divisível`;
  }
  if (b % a === 0) {
    divisivelB = `é divisível`;
  } else {
    divisivelB = `não é divisível`;
  }

  if (a - b < 0) {
    diferenca = (a - b) * -1;
  } else {
    diferenca = a - b;
  }

  console.log(`\nEntrada: ${a} ${b}
Saida:
O maior é: ${numeroMaior}
${a} ${divisivelA} por ${b}
${b} ${divisivelB} por ${a}
A diferença entre eles é de ${diferenca}`);
}
verificadorDeNumeros(3, 10)

/* Exercicio de funções */
//1-
let segMaiorsegMenor = (array) => {
  let segMaior = array[0];
  let segMenor = array[array.length - 1];

  for (let index = 0; index < array.length; index++) {
    if (index > segMaior) {
      segMaior = index;
    }
  }
  for (let index = array.length; index > 1; index--) {
    if (index < segMenor) {
      segMenor = index;
    }
  }

  console.log(`\nO segundo maior é ${segMaior} e o segundo menor é ${segMenor}`);
}
segMaiorsegMenor(meuArray);

//2-
// let funcaoNaoNomeada = () => {
//   alert(`Hello labenu!`);
// }
// funcaoNaoNomeada();

/* Exercicios objetos */
//1- arrays e objetos são colecoes de dados que podem ser armazenados em uma variável.
//Utilizamos quando queremos guardar uma coleção de dados em uma variável;

//2-
let criaRetangulo = (a, b) => {
  let perimetro = 2 * (a + b);
  let area = a * b;

  console.log(`\nA largura do quadrado é ${a}, a altura é ${b}, o perimetro é ${perimetro} e
a area é ${area}.`);
}
criaRetangulo(10, 20);

//3-
let filmeFavorito = {
  titulo: `Filme`, //não tenho filme favorito
  ano: `1995`,
  diretor: `Diretor`,
  atores: [`ator1`, `ator2`, `ator3`]
}
console.log(`\nVenha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor}
e estrelado por ${filmeFavorito.atores[0]}, ${filmeFavorito.atores[1]}, ${filmeFavorito.atores[2]}`);

//4-
let pessoa = {
  nome: `Marcelo`,
  idade: `43`,
  email: `email@email.com`,
  endereco: `rua A 5, n° 530B`
}

let anonimizarPessoa = (obj) => {
  let novoObj = {
    nome: `ANÔNIMO`,
    idade: obj.idade,
    email: obj.email,
    endereco: obj.endereco
  }
  return novoObj;
}
console.log("\n", anonimizarPessoa(pessoa));



/* EXERCICIO DE ARRAY */
//1-
let execArray = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 }
]

//a)
console.log("\n", execArray.filter(p => {
  if (p.idade >= 20) {
    return true;
  }
}));

//b)
console.log("\n", execArray.filter(p => {
  if (p.idade < 20) {
    return true;
  }
}));


//2-
const _array = [1, 2, 3, 4, 5, 6];

//a)
let arrayMultiplicado = (arr) => {
  let novoArray = []
  arr.forEach(p => {
    novoArray.push(p * 2);
  })
  return novoArray;
}
console.log("\n", arrayMultiplicado(_array));

//b)
let arrayTriplicadoString = (arr) => {
  let novoArray = []
  arr.forEach(p => {
    novoArray.push((p * 3).toString());
  })
  return novoArray;
}
console.log("\n", arrayTriplicadoString(_array));

//c)
let arrayParImpar = (arr) => {
  let novoArray = []
  arr.forEach(p => {
    if (p % 2 === 0) {
      novoArray.push(`${p} é um número par`);
    } else {
      novoArray.push(`${p} é um número impar`);
    }
  })
  return novoArray;
}
console.log("\n", arrayParImpar(_array));



//3-
const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8 },
  { nome: "João", idade: 20, altura: 1.3 },
  { nome: "Pedro", idade: 15, altura: 1.9 },
  { nome: "Luciano", idade: 22, altura: 1.8 },
  { nome: "Artur", idade: 10, altura: 1.2 },
  { nome: "Soter", idade: 70, altura: 1.9 }
]

//a)
console.log(`\n`, pessoas.filter(p => {
  if (p.idade > 14 && p.altura >= 1.5 && p.idade < 60) {
    return true;
  }
}));

//b)
console.log(`\n`, pessoas.filter(p => {
  if (p.idade < 14 || p.altura <= 1.5 || p.idade > 60) {
    return true;
  }
}));


//4-
const consultas = [
  { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
  { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
  { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
  { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

let emails = (cliente) => {
  for (const iterator of cliente) {
    let nome = iterator.nome;
    let tratamento = iterator.genero === `masculino` ? `Sr` : `Sra`;
    let lembrar = iterator.genero === `masculino` ? `lembra-lo` : `lembra-la`;
    let dataConsulta = iterator.dataDaConsulta;

    if (iterator.cancelada) {
      console.log(`\nOlá, ${tratamento} ${nome}, Infelizmente, sua consulta marcada
      para o dia ${dataConsulta} foi cancelada. Se quiser, pode entrar em 
      contato conosco para remarcá-la`);
    } else {
      console.log(`\nOlá, ${tratamento} ${nome}, estamos enviando esta mensagem para
      ${lembrar} da sua consulta no dia ${dataConsulta}. Por favor, acuse
      o recebimento deste e-mail.`);
    }

  }
}
emails(consultas);


//5-
const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function soma(array) {
  return array.reduce((total, valor) => total + valor, 0)
}
let somaContas = (contas) => {
  contas.forEach(p => {
    p.saldoTotal = p.saldoTotal - soma(p.compras);
  })
}

somaContas(contas);

console.log("\n", contas);






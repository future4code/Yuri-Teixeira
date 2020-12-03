const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
//false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)
//false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
//true

console.log("e. ", typeof resultado)
//bool

let array
console.log('a. ', array)
//a. undefined

array = null
console.log('b. ', array)
//b.  null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//c.  11

let i = 0
console.log('d. ', array[i])
//d.  3

array[i+1] = 19
console.log('e. ', array)
//e.  [ 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]

const valor = array[i+6]
console.log('f. ', valor)
//f.  9


let idadeUsuario = prompt("Qual é a sua idade?");
let idadeMelhorAmigo = prompt("Qual é a idade do seu melhor amigo?");

console.log("Sua idade é maior do que a do seu melhor amigo?" , true);
console.log("Diferença de idade: ", idadeUsuario - idadeMelhorAmigo);


let numeroPar = prompt("Insira um número par")
console.log(numeroPar%2);
//Percebi que quando nao sao numeros quebrados, todos os numeros impares restam 1 e os pares restam 0
// se inserir numero impar, sempre sobra 1

let listaDeTarefas = [];
listaDeTarefas.push(prompt("Insira a primeira tarefa")) 
listaDeTarefas.push(prompt("Insira a segunda tarefa")) 
listaDeTarefas.push(prompt("Insira a terceira tarefa")) 
console.log(listaDeTarefas);

let indiceRealizado = prompt("Inidique o indice da tarefa ja realizada")
listaDeTarefas.splice(indiceRealizado,1);
console.log(listaDeTarefas);

let usuario = prompt("Insira o seu nome");
let email = prompt("Insira o seu email");
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${usuario}!`);

/* DESAFIO */

/* 1 */

let kelvin = (77 - 32) * 5 / 9 + 273.15;
console.log(kelvin);

let fahrenheit = (80) * 9 / 5 + 32;
console.log(fahrenheit);

let fahrenheit2 = (30) * 9 / 5 + 32;
let kelvin2 = (fahrenheit2 - 32) * 5 / 9 + 273.15;
console.log(`-- 30° Graus --\nKelvin: ${kelvin2}\nFahrenheeit: ${fahrenheit2}`);

let fahrenheit3 = (prompt("Insira o valor em graus")) * 9 / 5 + 32;
console.log(fahrenheit3);

/* 2 */

console.log('Consumo de 280kw/h é:', 280 * 0.05 + ' reais');
console.log(`Consumo de 280kw/h é: R$${280 * 0.05} e com desconto fica: R$${(280 * 0.05) - ((280 * 0.05) * 0.15)}.`);

/* 3 */
let conversaoLibra = 20 / 2.2046;
console.log(`20lb equivale a....: ` + conversaoLibra + " kg");

let conversaoOnca = 10.5 / 35.274;
console.log(`10.5oz equivale a..: ` + conversaoOnca + " kg");

let conversaoMilha = 100 / 0.00062137;
console.log(`100mi equivale a...: ` + conversaoMilha + " M");

let conversaoPes = 50 / 3.2808;
console.log(`50ft equivale a....: ` + conversaoPes + " M");

let conversaoGalao = 103.56 / 0.26417;
console.log(`103.56gl equivale a: ` + conversaoGalao + " L");

let conversaoXicara = (450 * 6) / 25;
console.log(`450xic equivale a..: ` + conversaoXicara + " L");

let valorXicara = prompt("Insira o valor de xicaras que deseja converter para litros");
let conversaoXicaraPrompt = (valorXicara * 6) / 25;
console.log(`${valorXicara}xic equivale a..: ` + conversaoXicaraPrompt + " L"); 
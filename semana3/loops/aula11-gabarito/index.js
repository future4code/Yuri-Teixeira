/* EXERCICIO 1 */
// ele criando um loop para imprimir no console numeros com a condição que esse 
//numero for menor do que 5, se nao for, ele incrementa ++ até chegar em 5, posteriormente
//a execução é pausada;


/* EXERCICIO 2 */
//a)ele vai imprimir numeros do array do 19 ao 30;
//b)sim. Todos os indices ja estão sendo acessados, o que acontece e que nem todos
//estão sendo impreessos por causa da condição IF dentro do for;


/* DESAFIO 1 */
//iria ser impresso numeros zeros em sequencial, cada linha iria aumentar um zero
//ate chegar na linha que o usuario digitou no prompt


/* EXERCICIO 3 */

// let arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// //a)
// for (numero of arrayOriginal) {
//     console.log(numero);
// }

// //b)
// for (numero of arrayOriginal) {
//     console.log(numero / 10);
// }

// //c)
// let novoArray = []
// for (numero of arrayOriginal) {
//     if (numero % 2 == 0) {
//         novoArray.push(numero);
//     };
// }
// for (numero of novoArray) {
//     console.log(numero);
// }

// //d)
// let novoArray2 = [];
// let i = 0;
// for (str of arrayOriginal) {
//     novoArray2.push(`O elemento ${i} é o número ${str}`);
//     i++;
// }
// for (const str of novoArray2) {
//     console.log(str);
// }

// //e)
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let numeroMaior = 0;
// let numeroMenor = 999;

// for (const numero of array) {
//     if(numero > numeroMaior){
//         numeroMaior = numero;
//     }
//     if(numero < numeroMenor){
//         numeroMenor = numero;
//     }
// }
// console.log(`O numero maior é: ${numeroMaior}\nO número menor é: ${numeroMenor}`);


/* DESAFIO 2 */
// console.log(`Vamos jogar!`);

// let numeroEscolhido = prompt(`Escolha um numero`);
// let chutes = 0;
// let acerto = false;

// while (acerto === false) {
//     let chute = prompt(`Insira um numero para acertar`);

//     if (chute === numeroEscolhido) {
//         console.log(`Parabens, vc acertou o número.\nQtde de chutes: ${chutes}`)
//         acerto = true;
//     } else {
//         if (chute > numeroEscolhido) {
//             console.log(`Ops, o número é maior!`);
//         } else {
//             console.log(`Ops, o número é menor!`);
//         }
//         chutes++;
//     }
// }

/* DESAFIO 3 */
console.log(`Vamos jogar!`);
console.log(`Escolhemos um número de 1 a 10 para que vc tente acertar. Vamos lá`);
let numeroEscolhido = Math.floor(Math.random() * 100);
let chutes = 0;
let chute = 0;
let acerto = false;

while (acerto === false) {
    chute = prompt(`Insira um numero para acertar`);

    if (chute < numeroEscolhido) {
        console.log(`Ops, o número é maior!`);
    } else if (chute > numeroEscolhido) {
        console.log(`Ops, o número é menor!`);
    } else {
        console.log(`Parabens, vc acertou o número.\nQtde de chutes: ${chutes}`)
        acerto = true;
    }

    chutes++;
}
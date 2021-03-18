//b) entra array de numeros e sai um objeto

type amostraNumeros = {
  maior: number;
  menor: number;
  media: number;
};

function obterEstatisticas(numeros: number[]) {
  const numerosOrdenados = numeros.sort((a, b) => a - b);

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas: amostraNumeros = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

console.log(obterEstatisticas([1, 2, 3, 4, 5]));

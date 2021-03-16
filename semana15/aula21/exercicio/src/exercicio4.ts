//a) tsc "caminho/nome do arquivo"
type pokemon = {
  name: string;
  types: string;
  healthPoints: number;
};

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28,
};

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31,
};

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35,
};

//b) se ele apenas tivesse dentro de src, nao seria diferente, pois o parametro 
//"rootDir": "./src",  não estaria ativado.

//c) sim, ativando o parametro "rootDir": "./src" e colocando todos os arquivos 
//dentro dessa pasta, ao executar tsc ele iria transpilar todos os aquivos contidos

//d) nao achei nenhuma diferença.

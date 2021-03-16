//a)
// let minhaString: string = 1;
// Da erro "Type 'number' is not assignable to type 'string'.";

//b)
let meuNumero: number | string = "";

//c)
enum CORES {
  AZUL_ESCURO = "AZUL_ESCURO",
  PRETO = "PRETO",
  CINZA = "CINZA",
  BRANCO = "BRANCO",
}

type pessoa = {
  nome: string;
  idade: number;
  corFavorita: CORES;
};

const Caio: pessoa = {
  nome: "Caio",
  idade: 20,
  corFavorita: CORES.AZUL_ESCURO,
};

const Amanda: pessoa = {
  nome: "Amanda",
  idade: 21,
  corFavorita: CORES.BRANCO,
};

const Lais: pessoa = {
  nome: "Lais",
  idade: 22,
  corFavorita: CORES.CINZA,
};

console.log(Caio,Amanda,Lais);


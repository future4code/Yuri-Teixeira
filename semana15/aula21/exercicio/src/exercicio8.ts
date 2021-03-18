const pratos = require("./exercicio8.json");
import fs from "fs";

type prato = {
  nome: string;
  custo: number;
  valor: number;
  ingredientes: string[];
};

const novoPrato: prato = {
  nome: "macarronada2",
  custo: 5,
  valor: 10,
  ingredientes: ["macarrao", "molho", "queijo"],
};

const addPrato = (prato: prato): void => {
  pratos.push(prato);
  fs.writeFileSync("./exercicio8.json", JSON.stringify(pratos));
  console.log(pratos);
};

addPrato(novoPrato);

const tarefas = require("./tarefas.json");
const fs = require("fs");

const addTarefa = () => {
  tarefas.push(process.argv[2]);
  fs.writeFileSync("./tarefas.json", JSON.stringify(tarefas));
};

addTarefa();
console.log("tarefas", tarefas);

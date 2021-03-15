//3
let tarefas = ["comprar leite"];
const addTarefa = () => {
  tarefas.push(process.argv[2]);
};
addTarefa();
console.log("tarefas",tarefas);

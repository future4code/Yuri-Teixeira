function criarTarefa() {
  let tarefa = document.getElementById("tarefa").value;
  let dia = document.getElementById("dias-semana").value;

  let campo = document.getElementById(`${dia}`);
  campo.innerHTML += `<div class="tarefaCriada">${tarefa}</div>` + "\n";

  if (!document.getElementById("tarefa").value) {
    alert(`Tarefa nao pode ser criada em branco.`)
  } else {
    document.getElementById("tarefa").value = null;
  }
}

const tarefasCriadasDomingo = document.getElementById('domingo');
tarefasCriadasDomingo.addEventListener('click', riscarItem);

const tarefasCriadasSegunda = document.getElementById('segunda');
tarefasCriadasSegunda.addEventListener('click', riscarItem);

const tarefasCriadasTerca = document.getElementById('terca');
tarefasCriadasTerca.addEventListener('click', riscarItem);

const tarefasCriadasQuarta = document.getElementById('quarta');
tarefasCriadasQuarta.addEventListener('click', riscarItem);

const tarefasCriadasQuinta = document.getElementById('quinta');
tarefasCriadasQuinta.addEventListener('click', riscarItem);

const tarefasCriadasSexta = document.getElementById('sexta');
tarefasCriadasSexta.addEventListener('click', riscarItem);

const tarefasCriadasSabado = document.getElementById('sabado');
tarefasCriadasSabado.addEventListener('click', riscarItem);


function riscarItem(e) {
  e.target.innerHTML = `<strike>${e.target.textContent}</strike>`;
}

function limparTarefas(){
  for (const iterator of document.getElementsByClassName('tarefaCriada')) {
    iterator.innerHTML = null;
  }
}
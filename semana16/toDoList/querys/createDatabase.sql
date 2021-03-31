drop table if exists toDoList;
create database toDoList;
use toDoList;

create table users(
 id int auto_increment primary key,
 name varchar(255) not null,
 nickname varchar(255) unique not null,
 email varchar(255) unique not null
);

create table tasks(
  id int auto_increment primary key,
  title varchar(255) not null,
  description text not null,
  limitDate date not null,
  status enum('todo','doing','done') not null,
  id_createdby int not null
);
alter table tasks 
add constraint id_createdby_tasks
foreign key (id_createdby)
references users(id);

create table userstasks(
  id_task int,
  id_user int,
  primary key(id_task,id_user)
);
alter table userstasks 
add constraint id_task_userstasks
foreign key (id_task)
references tasks(id);
alter table userstasks
add constraint id_user_userstasks
foreign key(id_user)
references users(id); 

insert into users values
(null,'Yuri Pinheiro','yuri','yuri@gmail.com'),
(null,'Mateus Gesualdo','mateus','mateus@gmail.com'),
(null,'Joao Vitor Alves','jvalves','jvalves@gmail.com');

insert into tasks values
(null,'Criar um banco de dados','Banco de dados para projeto','2021-09-01','todo',1),
(null,'Front end nubank','A Nubank pediu um front end','2021-05-01','todo',2),
(null,'Corrigir PRs dos alunos','Muitos PRs nao estao corrigidos, corrigir','2021-04-01','todo',3),
(null,'Sair pra tomar uma com os brothers','Sextou ne?',now(),'todo',1);
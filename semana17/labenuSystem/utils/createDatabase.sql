create table lbsystem_class (
  id int auto_increment primary key,
  name varchar(255) not null,
  startdate date not null,
  enddate date not null,
  module varchar(255)
);

create table lbsystem_students (
  id int auto_increment primary key,
  name varchar(255) not null,
  email varchar(255) not null,
  birthDate date not null,
  id_class int
);
alter table lbsystem_students
add constraint fk_id_class_lbsystem_students
foreign key(id_class)
references lbsystem_class(id);

create table lbsystem_teachers (
  id int auto_increment primary key,
  name varchar(255) not NULL,
  email varchar(255) not null,
  birthDate date not null
);
create table lbsystem_skills (
  id int auto_increment primary key,
  name enum(
    "React",
    "Redux",
    "CSS",
    "Testes",
    "Typescript",
    "POO",
    "Backend"
  ) not null
);

create table lbsystem_skillteachers(
  id_teacher int not null,
  id_skill int not null,
  primary key(id_teacher, id_skill)
);
alter table lbsystem_skillteachers
add constraint fk_id_teacher_lbsystem_skillteachers
foreign key (id_teacher)
references lbsystem_teachers(id); 
alter table lbsystem_skillteachers
add constraint fk_id_skill_lbsystem_skillteachers
foreign key (id_skill)
references lbsystem_skills(id); 

create table lbsystem_classteachers(
  id_class int not null,
  id_teachers int not null,
  primary key(id_class,id_teachers)
);
alter table lbsystem_classteachers
add constraint fk_id_class_lbsystem_classteachers
foreign key (id_class)
references lbsystem_class(id); 
alter table lbsystem_classteachers
add constraint fk_id_sudent_lbsystem_classteachers
foreign key (id_teachers)
references lbsystem_teachers(id); 
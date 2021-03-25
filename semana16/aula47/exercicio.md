### Exericio 1
a) chave estrangeira serve para referenciar uma chave primaria em oujtra tabela

b) 
CREATE TABLE Rating (
		id int PRIMARY KEY auto_increment,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id int,
    FOREIGN KEY (movie_id) REFERENCES filmes(id)
);

insert into Rating values(null, 'algo',1,1);
insert into Rating values(null, 'algo',2,2);
insert into Rating values(null, 'algo',3,3);
insert into Rating values(null, 'algo',4,4);
insert into Rating values(null, 'algo',5,5);
insert into Rating values(null, 'algo',6,6);

c) não tem como pq a chave referenciada nao existe.

d) alter table Rating drop column rate;

e) Não tem como pq há uma chave estrangeira referenciando a chave primaria do 
filme que tentei apagar.

### Exercicio 2
a) é uma tabela de associação de dados, relação de N:N

b) 
insert into MovieCast  values 
(1,2),
(2,1),
(3,3),
(4,1),
(5,2);

c) Nao tem como criar pq a constraint nao existe;

d) nao tem como apagar pq o dado esta referenciado em outra tabela;

### Exercicio 3
a) o operador ON serve para indicar ligação entre tabelas;

b)
select 
nome, 
id 
from filmes a
inner join Rating b on a.id = b.movie_id;

### Exercicio 4
a)
select 
nome, 
id 
from filmes a
left outer join Rating b on a.id = b.movie_id;

b)
select
a.nome,
a.titulo,
b.actor_id
from filmes a
inner join MovieCast b on a.id = b.movie_id

### Exercicio 5
a) Por que há uma ligação pra cada tabela

b)
SELECT 
m.id,
m.title
FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

### Exercicio 6
a) essa e uma relação N:N
b) 


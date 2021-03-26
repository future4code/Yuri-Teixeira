### Exercicio 1
d)
alter table Actor change genger gender varchar(100);

### Exercicio 2
a)
update Actor set 
name='lalala',
birthdate='1900-01-01'
where
id = '003';

b)
update Actor set 
name='JULIANA PÃES'
where
id = '003';

c)
update Actor set
name = 'lalala',
salary = 10,
birth_date = '1900-01-01',
gender = 'Male',
favorite_ice_cream_flavor = 'lalala',
type= 'Director'
where
id = '005';

d)
update Actor set
name = 'lalala',
salary = 10,
birth_date = '1900-01-01',
gender = 'Male',
favorite_ice_cream_flavor = 'lalala',
type= 'Director'
where
id = '056';

Não foi possivel atualizar dados pq a condição da query não existe.

### Exercício 3
a)
delete from Actor where name = 'Fernanda Montenegro';

b)
delete from Actor where gender = 'Male' and salary > 1000000;

### Exercicio 4
a)
select salary from Actor order by salary desc limit 1;

b)
select MIN(salary) from Actor where gender = 'female';

c) 
select count(*) as qtde from Actor where gender = 'female';

d)
select SUM(salary) from Actor;

### Exercicio 5
a) A query conta de forma agrupada por gender;

b) 
select id, name from Actor order by name desc;

c)
select * from Actor order by salary;

d)
select * from Actor order by salary desc limit 3;

e)
select avg(salary) from Actor;

### Exercicio 6
a)
alter table add column playing_limit_date date default '1900-01-01';

b)
alter table filmes change rating rating decimal(10,2);

c)
update filmes set playing_limit_date = '2050-01-01' where id = '001';
update filmes set playing_limit_date = '1800-01-01' where id = '002';

d)
delete from filmes where id = 1;
update filmes set nome = 'lalala' where id = 1;

nenhuma linha foi afetada pois a condicao do delete nao existe.

### Exercicio 7
a)
select * from filmes where playing_limit_date >= now() and avaliacao > 7.5;

b)
select avg(avaliacao) from filmes;

c)
select count(*) from filmes where playing_limit_date >= now();

d)
select count(*) from filmes where lancamento > now();

e)
select max(avaliacao) from filmes;

f)
select min(avaliacao) from filmes;

### Exercicioo 8
a)
select * from filmes order by nome;

b)
select * from filmes order by nome desc limit 5;

c)
select * from filmes order by lancamento desc limit 3;

d)
select * from filmes order by avaliacao desc limit 3;


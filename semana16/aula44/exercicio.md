### Exercicio 1

a) Varchar é utilizado para campos de texto, date para datas, primary key pra 
dizer que aquele campo é uma chave primaria;
b) show databases mostra os schemas e show tables; 
c) mostra todas as propriedades da tabela;

### Exercicio 2
a)
insert into Actor (id, name, salary, birth_date, gender) values(
  "002",
  "Glória Pires",
  1200,
  "1963-08-23",
  "female"
);

b)
insert into Actor (id, name, salary, birth_date, gender) values(
  "002",
  "Marilyn Manson",
  1000000,
  "1963-08-23",
  "female"
);
SQL Error [1062] [23000]: Duplicate entry '002' for key 'PRIMARY';
Pq já existe uma linha com este ID;

c) as especificações das colunas não era o mesmo da inserção de dados;
d) as especificações das colunas nao estava na mesma ordem dos dados;
e) a data tem que estar em aspas;

### Exercicio 3

a)
select * from Actor where gender = "female";

b)
select salary from Actor where name = "Tony Ramos";

c)
select * from Actor where gender = "invalid";

Não aparece nada pq nao existe esse gender dentro do banco de dados;

d) 
select id, name, salary from Actor where salary > 500;

e) deu erro pq a coluna "nome" não existe;
SELECT id, name from Actor WHERE id = "002";

### Exercicio 4

a) Selecione todas as informações da tabela actor que o campo name comece com a letra
A ou J e o valor de salary for maior que 300000

b)
select * from Actor where name not like 'A%' and salary > 350000;

c)
select * from Actor where UPPER(name) like '%g%';

d)
select * from Actor where (UPPER(name) like '%A%' or UPPER(name) like '%G%') and 
salary between 350000 and 900000;

### Exercicio 5
a)
create table filmes(
  id int primary key,
  nome varchar(255),
  sinopse text,
  lancamento date,
  avaliacao int
);

b)
insert into filmes values("001","Se eu fosse voce","Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",'2006-01-06',7);

c)
insert into filmes values("002","Doce de mãe","Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela","2012-12-27",10);

d)
insert into filmes values("003","Dona Flor e Seus Dois Maridos","Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.","2017-11-02",8);

e)
insert into filmes values("004","2 Coelhos","Edgar encontra-se em uma situação bem conhecida para a maioria dos brasileiros: preso entre a criminalidade e o poder público corrupto. Cansado dessa vida, ele planeja fazer justiça com as próprias mãos e executa um plano que colocará criminosos e corruptos em rota de colisão.", "2012-01-20",9);

### Exercicio 6
a)
select id, titulo, avaliacao from filmes where id = '001';

b)
select * from filmes where titulo = 'Se eu fosse voce';

c)
select id, titulo, sinopse where avaliacao >= 7;

### Exercicio 7
a)
select * from filmes where titulo like '%vida%';

b)
select * from filmes where sinopse like '%algo%' or titulo like '%algo%';

c)
select * from filmes where lancamento <= now();

d)
select * from filmes where (sinopse like '%algo%' or titulo like '%algo%') and avaliacao > 7;
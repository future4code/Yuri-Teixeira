### exercicio 1
a) a resposta dada pela request utilizando raw vem com a resposta e todos os parametros
que o banco envia;

b) 
app.post("/actorName", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const result = await connection("Actor").where({ name: req.body.name });
    res.send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

c)
app.get('/gendersCount',async (req:Request, res:Response)=> {
  let errorCode = 400;
  try {
    const result = await connection.raw(`select count(*) as count, gender from Actor group by gender `);
    res.status(200).send(result[0]);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

### Exercicio 2
a)
app.put("/ActorChangeSalary/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const result = await connection(`Actor`)
      .update({ salary: req.body.salary })
      .where({ id: req.params.id });

    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

b)
app.delete("/ActorRemove/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const result = await connection("Actor")
      .delete()
      .where({ id: req.params.id });

    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

c)
app.get("/ActorSalaryAvg", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const result = await connection.raw(
      `select avg(salary) from Actor where gender = '${req.body.gender}'`
    );
    res.status(200).send(result[0]);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

### Exercicio 3
a)
app.get("/Actor/:id", async(req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const result =await connection.raw(
      `select * from Actor where id = '${req.params.id}' `
    );
    res.status(200).send(result[0]);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

b)
app.get("/gendersCount", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const result = await connection.raw(
      `select count(*) as count, gender from Actor group by gender `
    );
    res.status(200).send(result[0]);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

### Exercicio 4

### Exercicio 5
const criarFilme = async (
  nome: string,
  sinopse: string,
  lancamento: Date,
  avaliacao: number,
  playing_limit_date: Date
) => {
    await connection
      .insert({
        id: Date.now(),
        nome: nome,
        sinopse: sinopse,
        lancamento: lancamento,
        avaliacao: avaliacao,
        playing_limit_date: playing_limit_date,
      })
      .into(`filmes`);
};

app.post("/createMovie", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
  await criarFilme(
      req.body.nome,
      req.body.sinopse,
      req.body.lancamento,
      req.body.avaliacao,
      req.body.playing_limit_date
    );
    res.status(200).send();
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

### Exercicio 6
app.get("/movies", async(req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const result =await connection.raw(`select * from filmes limit 15`);
    res.status(200).send(result[0]);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

### Exercicio 7
app.get("/searchMovie", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const result = await connection.raw(
      `select * from filmes where UPPER(nome) like '%${req.query.name}%'`
    );
    res.status(200).send(result[0]);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});


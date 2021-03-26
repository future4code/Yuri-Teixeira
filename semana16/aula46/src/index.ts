import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";

app.get("/", (req: Request, res: Response) => {
  res.send(`Ta funcionando`);
});

app.post("/Actor", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    await connection.raw(`
    insert into Actor (id,name,gender,salary,birth_date)
    values(
      '${req.body.id}',
      '${req.body.name}',
      '${req.body.gender}',
      ${req.body.salary},
      '${req.body.birth_date}'
    );`);

    res.send(200);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.get("/Actor/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const result = await connection.raw(
      `select * from Actor where id = '${req.params.id}' `
    );
    res.status(200).send(result[0]);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.get("/Actors", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const result = await connection.raw(`select * from Actor;`);

    res.status(200).send(result[0]);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.put("/ChangeActor/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    await connection("Actor")
      .update({
        name: req.body.name,
        salary: req.body.salary,
        birth_date: req.body.birthDate,
        gender: req.body.gender,
      })
      .where({ id: req.params.id });

    res.send("ok");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.post("/actorName", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const result = await connection("Actor").where({ name: req.body.name });
    res.send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

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

app.get("/movies", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const result = await connection.raw(`select * from filmes limit 15`);
    res.status(200).send(result[0]);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

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

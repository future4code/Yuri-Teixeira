import express, { Request, Response } from "express";
import cors from "cors";
import { countries, country } from "../countries";

const app = express();
app.use(express.json());
app.use(cors());
app.listen(3000, () => {
  console.table("App escutando na porta 3000");
});

app.get("/countries/all", (req: Request, res: Response) => {
  const result = countries.map((ct) => {
    return { id: ct.id, nome: ct.name };
  });
  res.status(200).send(result);
});

app.get("/countries/search", (req: Request, res: Response) => {
  const name = req.query.name as string;
  let countriesFiltered: country[] = [...countries];

  if (name) {
    countriesFiltered = countriesFiltered.filter((ct) => {
      return ct.name.includes(name as string);
    });
  }

  if (req.query.capital) {
    countriesFiltered = countriesFiltered.filter((ct) => {
      return ct.capital.includes(req.query.capital as string);
    });
  }

  if (req.query.continent) {
    countriesFiltered = countriesFiltered.filter((ct) => {
      return ct.continent.includes(req.query.continent as string);
    });
  }

  res.status(200).send({ countriesFiltered });
});

app.get("/countries/:id", (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const country = countries.filter((ct) => {
    if (ct.id === id) {
      return ct;
    }
  });

  if (country.length) {
    res.status(200).send(country);
  } else {
    res.status(404).send({ message: "Country not found!" });
  }
});

app.put("/countries/:id", (req: Request, res: Response) => {
  if (!req.params.id || !req.body) {
    res.status(401).send("Obrigatório todos os parametros!");
    return;
  }

  let alteredCountries: country[] = [...countries];
  const id: number = Number(req.params.id);

  alteredCountries = alteredCountries.map((p) => {
    if (p.id === id) {
      return { ...p, name: req.body.name, capital: req.body.capital };
    } else {
      return p;
    }
  });

  res.status(200).send(alteredCountries);
});

app.delete("/countries/:id", (req: Request, res: Response) => {
  try {
    if (!req.headers.authorization) {
      throw Error("nao autorizado");
    }

    const id: number = Number(req.params.id);
    let newCountries: country[] = [...countries];

    newCountries = newCountries.filter((p) => {
      return p.id !== id;
    });

    res.status(200).send(newCountries);
  } catch (error) {
    res.status(401).send({ message: "não autorizado" });
  }
});

app.post("/countries/create", (req: Request, res: Response) => {
  let errorCode: number = 0;
  try {
    if (!req.body.name || !req.body.capital || !req.body.continent) {
      errorCode = 400;
      throw Error("O body está incompleto ou incorreto!");
    }
    if (!req.headers.authorization) {
      errorCode = 401;
      throw Error("Não autorizado");
    }

    const newCountry = {
      message: "New country successfully created!",
      newCountry: {
        id: Date.now(),
        name: req.body.name,
        capital: req.body.capital,
        continent: req.body.continent,
      },
    };

    countries.push(newCountry.newCountry);
    res.status(200).send(newCountry);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

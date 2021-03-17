import express, { Request, Response } from "express";
import cors from "cors";
import { countries } from "../countries";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/countries/all", (req: Request, res: Response) => {
  const result = countries.map((ct) => {
    return { id: ct.id, nome: ct.name };
  });
  res.status(200).send(result);
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

app.listen(3000, () => {
  console.table("App escutando na porta 3000");
});

app.get("/countries/search",(req: Request, res: Response)=>{
  
})

import express, { Request, Response } from "express";
import cors from "cors";
import users, { typeUser } from "./users";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.listen(port, () => {
  console.log(`The app is running on port ${port}`);
});

app.post("/newUser", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { name, cpf, birthDay } = req.body;

    if (!name || !cpf || !birthDay) {
      throw new Error("All parameters are required in the body.");
    }

    const verifyCpf = (): number => {
      return users.findIndex((p) => {
        return cpf === p.cpf;
      });
    };

    if (verifyCpf() > -1) {
      throw new Error("This CPF already exists.");
    }

    const verifyAge = (): number => {
      const d1: Date = new Date(Date.now());
      const d2: Date = new Date(birthDay);
      const diff: number = Math.floor(d1.getTime() - d2.getTime());

      const day: number = 1000 * 60 * 60 * 24;
      const days: number = Math.floor(diff / day);
      const months: number = Math.floor(days / 31);
      const years: number = Math.floor(months / 12);

      return years;
    };

    if (verifyAge() < 18) {
      throw new Error("The user must be 18 years or older.");
    }

    const newUser: typeUser = {
      id: Date.now(),
      name: req.body.name,
      cpf: req.body.cpf,
      birthDay: req.body.birthDay,
      balance: 0,
      spending: [],
    };

    users.push(newUser);
    res.status(200).send({ message: "User created sucessfuly.", users });
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.get("/user", (req: Request, res: Response) => {
  let errorCode = 400;
  const { name, cpf } = req.body;

  try {
    if (!name || !cpf) {
      throw new Error("Invalid body.");
    }

    const index = users.findIndex((p) => {
      return p.cpf === cpf && p.name === name;
    });

    if (index > -1) {
      res
        .status(200)
        .send(
          `${users[index].name} has balance of: $${users[index].balance.toFixed(
            2
          )}`
        );
    } else {
      errorCode = 404;
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.put("/userCredit", (req: Request, res: Response) => {
  let errorCode = 400;
  const name: string = req.body.name;
  const cpf: string = req.body.cpf;
  const credit: number = Number(req.body.credit);
  
  try {
    if (!name || !cpf || !credit) {
      throw new Error("Body invalid!");
    }
    if (isNaN(credit)) {
      errorCode = 422;
      throw new Error("The credit amount must be an integer.");
    }

    const index = users.findIndex((p) => {
      return p.cpf === cpf && p.name === name;
    });

    if (index > -1) {
      users[index].balance += credit;
      res
        .status(200)
        .send(`Credit added successfully! Balance: ${users[index].balance}`);
    } else {
      errorCode = 404;
      throw new Error("User not found!");
    }
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

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

app.put("/userPay", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const cpf: string = req.body.cpf;
    const description: string = req.body.description;
    const datePayment = new Date(req.body.datePayment).toDateString();
    const value: number = Number(req.body.value);
    const indexUser = users.findIndex((p) => {
      return p.cpf === cpf;
    });
    const today = new Date().toDateString();

    if (!description || !datePayment || !value || !cpf) {
      throw new Error("Body invalid!");
    }
    if (indexUser === -1) {
      errorCode = 404;
      throw new Error("User not found!");
    }
    if (req.body.value > users[indexUser].balance) {
      throw new Error("You do not have enough balance for this transaction.");
    }
    if (datePayment < today) {
      errorCode = 401;
      throw new Error(
        "The payment date cannot be greater than the current date."
      );
    }

    users[indexUser].spending.push({
      value: value,
      date: datePayment,
      description: description,
    });

    users[indexUser].balance -= value;

    res.status(200).send(users[indexUser]);
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

app.put("/userTransfer", (req: Request, res: Response) => {
  let errorCode = 400;
  const name: string = req.body.name as string;
  const cpf: string = req.body.cpf as string;
  const receiver: string = req.body.receiver as string;
  const cpfReceiver: string = req.body.cpfReceiver as string;
  const value: number = Number(req.body.value);
  const index = users.findIndex((p) => {
    return p.cpf === cpf;
  });
  const indexReceiver = users.findIndex((p) => {
    return p.cpf === cpfReceiver;
  });

  try {
    if (!name || !cpf || !receiver || !cpfReceiver || !value) {
      throw new Error("Body invalid!");
    }
    if (index === -1) {
      errorCode = 404;
      throw new Error("User not found!");
    }
    if (indexReceiver === -1) {
      errorCode = 404;
      throw new Error("Receiver not found!");
    }
    if (value > users[index].balance) {
      throw new Error("You do not have enough balance for this transaction.");
    }

    users[index].balance -= value;
    users[indexReceiver].balance += value;

    res.status(200).send("Transfer successful!");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.get("/users", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    res.status(200).send(users);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

type userType = {
  id: number;
  name: string;
  email: string;
  type: types;
  age: number;
};

enum types {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

let users: userType[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: types.ADMIN,
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: types.NORMAL,
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: types.NORMAL,
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: types.NORMAL,
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: types.ADMIN,
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: types.ADMIN,
    age: 60,
  },
];

//1
//a) GET
//b) "/users"

//2
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.listen(3000, () => {
  console.log("App rodando");
});

app.get("/users/:type", (req: Request, res: Response) => {
  let errorCode = 400;
  const type: string = req.params.type?.toString().toUpperCase() as string;

  try {
    if (type !== "NORMAL") {
      if (type !== "ADMIN") {
        errorCode = 422;
        throw Error("Invalid type!");
      }
    }

    const filteredUsers = users.filter((p) => {
      return p.type === type.toUpperCase();
    });

    res.status(200).send(filteredUsers);
  } catch (error) {
    console.log(type);
    res.status(errorCode).send(error.message);
  }
});

//b) Sim, criando types

//3
app.get("/users", (req: Request, res: Response) => {
  const name: string = req.query.name as string;
  let errorCode = 400;

  try {
    const filteredUsers = users.filter((p) => {
      return p.name.includes(name);
    });

    if (!filteredUsers.length) {
      errorCode = 404;
      throw Error("Users not found!");
    }

    res.status(200).send(filteredUsers);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

//a) query params
//b) feito

//4
app.put("/users", (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  let errorCode = 400;

  try {
    const newUser: userType = {
      id: Date.now(),
      name: req.body.name,
      email: req.body.email,
      type: req.body.type,
      age: req.body.age,
    };

    users.push(newUser);
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//a) não mudou nada
//b) nao sei, ainda estou aprendendo as diferenças de cada um.

//5
app.put("/users/:id", (req: Request, res: Response) => {
  try {
    const id: number = Number(req.params.id);
    users = users.map((p) => {
      if (p.id === id) {
        return { ...p, name: req.body.name + "-ALTERADO" };
      } else {
        return p;
      }
    });

    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//6
app.patch("/users/:id", (req: Request, res: Response) => {
  try {
    const id: number = Number(req.params.id);
    users = users.map((p) => {
      if (p.id === id) {
        return { ...p, name: req.body.name + "-REALTERADO" };
      } else {
        return p;
      }
    });

    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//7
app.delete("/users/:id", (req: Request, res: Response) => {
  try {
    const id: number = Number(req.params.id);
    users = users.filter((p) => {
      return p.id !== id;
    });
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

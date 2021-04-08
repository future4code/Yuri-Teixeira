import { Request, Response } from "express";
import app from "./app";
import { userType } from "./types";
import newID from "./services/genID";
import { genToken } from "./services/tokenManager";
import { genHash, cmpHash } from "./services/bcrypt";
import { newUser, getUserByEmail, deleteUser } from "./functions";
import getInfoCep from "./services/getInfoCep";

app.post("/users/signup", async (req: Request, res: Response) => {
  let errorCode = 400;
  const id = newID();
  const newUserData: userType = {
    id: id,
    email: req.body.email,
    password: (await genHash(req.body.password)) as string,
    role: req.body.role,
  };

  try {
    await newUser(newUserData);
    res.status(200).send({ token: genToken(id) });
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.post("/users/signin", async (req: Request, res: Response) => {
  let errorCode = 400;
  const emailBody: string = req.body.email as string;
  const passwordBody: string = req.body.password as string;
  try {
    const { password } = await getUserByEmail(emailBody);
    const autentication = await cmpHash(passwordBody, password);

    if (autentication) {
      res.status(200).send("ok");
    } else {
      res.status(401).send("not authorized");
    }
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.post("/users/profile", async (req: Request, res: Response) => {
  let errorCode = 400;
  const emailBody: string = req.body.email as string;
  const passwordBody: string = req.body.password as string;
  try {
    const { password, role } = await getUserByEmail(emailBody);
    const autentication = await cmpHash(passwordBody, password);

    if (autentication && role === "NORMAL") {
      res.status(200).send("ok");
    } else {
      res.status(401).send("not authorized");
    }
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.delete("/users/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  const id = req.params.id;
  const emailBody: string = req.body.email as string;
  const passwordBody: string = req.body.password as string;
  try {
    const { password, role } = await getUserByEmail(emailBody);
    const autentication = await cmpHash(passwordBody, password);

    if (autentication && role === "ADMIN") {
      const result = await deleteUser(id.toString());
      res.status(200).send(result);
    } else {
      res.status(401).send("not authorized");
    }
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

getInfoCep("78580000").then(console.log);

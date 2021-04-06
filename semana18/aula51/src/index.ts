import { Request, Response } from "express";
import app from "./app";
import { userType } from "./types";
import newID from "./services/genID";
import { newUser } from "./functions";
import { genToken } from "./services/tokenManager";

app.post("/users", async (req: Request, res: Response) => {
  let errorCode = 400;
  const newUserData: userType = {
    id: newID,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  };
  try {
    const result = await newUser(newUserData);
    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

const newToken = genToken("alguma coisa");
newToken.then(console.log);
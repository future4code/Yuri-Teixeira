import app from "./app";
import { Request, Response } from "express";
import generateNewId from "./services/generateNewId";
import { generateToken, verifyToken } from "./services/manageTokens";
import { generateHash, compareHash } from "./services/bcrypt";
import createUser from "./functions/createUser";
import { userType } from "./types/types";

app.post("/signup", async (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const id = generateNewId();
    const name: string = req.body.name as string;
    const email: string = req.body.email as string;
    const password: string = req.body.password as string;
    const newUser: userType = {
      id,
      name,
      email,
      password: await generateHash(password),
    };

    if (!name || !email || !password) {
      throw new Error("Invalid body!");
    }

    const result = await createUser(newUser);
    const token = generateToken(id);
    res.status(200).send({ result, token });
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

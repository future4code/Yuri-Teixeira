import { Request, Response } from "express";
import app from "./app";
import genId from "./genId";
import { generationToken, validToken } from "./manageToken";
import { createUser, getUsers, getUserByEmail } from "./function";

app.post("/users", async (req: Request, res: Response) => {
  let errorCode = 400;
  const { email, password } = req.body;
  const id = genId();
  try {
    const result = await createUser(id, email, password);
    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.post("/users/signup", async (req: Request, res: Response) => {
  let errorCode = 400;
  const { email, password } = req.body;
  const id = genId();

  try {
    if (!email || email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }
    if (!password || password.length < 6) {
      throw new Error("Invalid password");
    }

    await createUser(id, email, password);
    const token = generationToken({ id });

    res.status(200).send({ token });
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.get("/users", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const result = await getUsers();
    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.post("/user/login", async (req: Request, res: Response) => {
  let errorCode = 400;
  const email: string = req.body.email as string;
  const password: string = req.body.password as string;
  const userData: any = await getUserByEmail(email);

  try {
    if (userData[0].password !== password) {
      throw new Error("Invalid credentials.");
    }

    const token = generationToken(userData.id);

    res.status(200).send({ token });
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.get("/user/profile", (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const token: string = req.headers.authorization as string;
    const id = validToken(token);
    res.status(200).send(id);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

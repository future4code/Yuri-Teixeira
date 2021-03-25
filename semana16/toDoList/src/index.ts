import app from "./app";
import express, { Request, Response } from "express";
import { createUser } from "./reqFunctions";

app.put("/user", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const name: string = req.body.name as string;
    const nickname: string = req.body.nickname as string;
    const email: string = req.body.email as string;

    if (!name || !nickname || !email) {
      errorCode = 422;
      throw new Error("Invalid body!");
    }

    const result = await createUser(name, nickname, email);
    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

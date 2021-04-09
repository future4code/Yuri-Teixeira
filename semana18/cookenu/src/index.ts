import { Request, Response } from "express";
import app from "./app";

app.post("/signup", (req: Request, res: Response) => {
  let errorCode = 400;
  const name: string = req.body.name as string;
  const email: string = req.body.email as string;
  const password: string = req.body.password as string;

  try {
    if (!name || !email || !password) {
      throw new Error("Invalid body!");
    }
    
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

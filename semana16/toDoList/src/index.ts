import app from "./app";
import express, { Request, Response } from "express";
import { createUser, getUserById } from "./reqFunctions";

//CREATE USER
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

//GET USER BY ID
app.get(
  "/user/:id",
  async (req: Request, res: Response): Promise<any> => {
    let errorCode = 400;
    const id: number = Number(req.params.id);

    try {
      if (isNaN(id)) {
        throw new Error("Invalid id!");
      }
      
      const result = await getUserById(id.toString());
      
      if (result.length === 0) {
        errorCode = 404;
        throw new Error("User not found!");
      }

      res.status(200).send(result[0]);
    } catch (error) {
      res.status(errorCode).send(error.message);
    }
  }
);

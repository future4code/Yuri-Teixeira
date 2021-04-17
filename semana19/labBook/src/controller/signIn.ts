import { Request, Response } from "express";
import getUserByEmailLogic from "../logic/getUserByEmailLogic";

const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const token = await getUserByEmailLogic(email, password);

    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default signIn;

import { Request, Response } from "express";
import { signInLogic } from "../logic/signInLogic";

export const signInController = async (req: Request, res: Response) => {
  try {
    const email: string = req.body.email as string;
    const password: string = req.body.password as string;

    const token = await signInLogic(email, password);

    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default signInController;

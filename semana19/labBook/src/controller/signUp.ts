import { Request, Response } from "express";
import createUserLogic from "../logic/createUserLogic";

const signUp = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const token = await createUserLogic(name, email, password);

    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default signUp; 

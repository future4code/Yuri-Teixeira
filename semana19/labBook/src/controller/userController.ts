import { Request, Response } from "express";
import _UserLogic from "../logic/userLogic.ts";

const UserLogic = new _UserLogic();

export default class UserController {
  // Sign up and return token
  signUp = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const token = await UserLogic.createUserLogic(name, email, password);

      res.status(200).send({ token });
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  //Sign in and return token
  signIn = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const token = await UserLogic.getUserByEmailLogic(email, password);

      res.status(200).send({ token });
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}

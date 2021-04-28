import { Request, Response } from "express";
import CustomError from "../errors/customError";
import userLogic from "../logic/userLogic";
import { IInputUserDTO, IInputLogin } from "../model/userModel";

export class userController {
  async signUp(req: Request, res: Response) {
    try {
      const inputUserDTO: IInputUserDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
      };

      const token = await userLogic.signUp(inputUserDTO);

      res.status(200).send({ token });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  async signIn(req: Request, res: Response) {
    try {
      const login: IInputLogin = {
        email: req.body.email,
        password: req.body.password,
      };

      const token = await userLogic.signIn(login);

      res.status(200).send({ token });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}

export default new userController();

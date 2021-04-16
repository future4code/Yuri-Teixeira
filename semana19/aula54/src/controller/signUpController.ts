import { Request, Response } from "express";

import * as signUpLogic from "../logic/signUpLogic";

const signUp = async (req: Request, res: Response) => {
  try {
    const inputSignUp = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };

    const token = await signUpLogic.createUser(inputSignUp);

    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export default signUp;

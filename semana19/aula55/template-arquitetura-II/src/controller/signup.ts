import { Request, Response } from "express";
import { signupBusiness } from "../business/signupBusiness";
import { signupInputDTO } from "../model/user";

export const signup = async (req: Request, res: Response) => {
  try {
    //é responsabilidade da controller. Está capturando os valores da
    //requisição
    const signUpInputDTO = {
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    } as signupInputDTO;

    //receber os valores que precisam ser enviados na resposta
    const token = await signupBusiness(signUpInputDTO);

    //enviar a resposta
    res.status(201).send({
      message: "Usuário criado!",
      token,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

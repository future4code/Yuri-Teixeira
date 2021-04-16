import { Request, Response } from "express";
import deleteUserLogic from "../logic/deleteUserLogic";

const deleteUser = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id as string;

    const result = await deleteUserLogic(id);
    res.status(200).send({ message: "User deleted sucessfuly", result });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default deleteUser;

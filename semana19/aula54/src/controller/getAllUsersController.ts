import { Request, Response } from "express";
import getAllUsersLogic from "../logic/getAllUsersLogic";

export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization;
    return await getAllUsersLogic(token as string);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default getAllUsersController;

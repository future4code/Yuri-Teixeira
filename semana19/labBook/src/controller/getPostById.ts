import { Request, Response } from "express";
import getPostByIdLogic from "../logic/getPostByIdLogic";

const getPostById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const post = await getPostByIdLogic(id);

    res.status(200).send(post);
  } catch (error) {
    res.status(400).send(error.message);
  }
};


export default getPostById;
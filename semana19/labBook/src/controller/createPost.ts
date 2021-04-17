import { Request, Response } from "express";
import createPostLogic from "../logic/createPostLogic";

const createPost = async (req: Request, res: Response) => {
  try {
    const { photo, description, type } = req.body;
    const authorization: string = req.headers.authorization as string;

    await createPostLogic(photo, description, type, authorization);
    
    res.status(200).send("Post created sucessfully!");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default createPost;

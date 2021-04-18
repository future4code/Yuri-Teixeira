import { Request, Response } from "express";
import _PostLogic from "../logic/postLogic";

const PostLogic = new _PostLogic();

export default class PostController {
  getPostById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id as string;
      const post = await PostLogic.getPostByIdLogic(id);

      res.status(200).send(post);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  createPost = async (req: Request, res: Response) => {
    try {
      const { photo, description, type } = req.body;
      const authorization: string = req.headers.authorization as string;

      await PostLogic.createPostLogic(photo, description, type, authorization);

      res.status(200).send("Post created sucessfully!");
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}

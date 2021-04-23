import { Request, Response } from "express";
import _PostLogic from "../logic/postLogic";
import { IInputPostDTO } from "../model/postModel";

const PostLogic = new _PostLogic();

export default class PostController {
  getPostById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id as string;
      const post = await PostLogic.getPostByIdLogic(id);

      res.status(200).send(post);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  createPost = async (req: Request, res: Response): Promise<void> => {
    try {
      const inputPostDTO: IInputPostDTO = {
        photo: req.body.photo,
        description: req.body.description,
        type: req.body.type,
      };

      const authorization: string = req.headers.authorization as string;

      const idPost = await PostLogic.createPostLogic(
        inputPostDTO,
        authorization
      );

      res.status(200).send({ message: "Post created sucessfully!", idPost });
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}

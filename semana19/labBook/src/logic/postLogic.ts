import { IInputPostDTO, IPostType } from "../model/postModel";
import _tokenManager from "../services/tokenManager";
import _PostData from "../data/postData";
import idGenerator from "../services/idGenerator";
import moment from "moment";

const PostData = new _PostData();
const tokenManager = new _tokenManager();

export default class postLogic {

  createPostLogic = async (
    inputPostDTO: IInputPostDTO,
    authorization: string
  ): Promise<string> => {
    try {
      if (
        !inputPostDTO.photo ||
        !inputPostDTO.description ||
        !inputPostDTO.type
      ) {
        throw new Error("Photo, description and type must be provided.");
      }
      if (!authorization) {
        throw new Error("You must be logged in to do this action.");
      }
      if (inputPostDTO.type !== "normal" && inputPostDTO.type !== "event") {
        inputPostDTO.type = "normal";
      }

      const authorId = tokenManager.getTokenData(authorization);
      const id = idGenerator();

      const newPost: IPostType = {
        id,
        photo: inputPostDTO.photo,
        description: inputPostDTO.description,
        type: inputPostDTO.type,
        createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
        authorId: authorId.id,
      };

      await PostData.createPostData(newPost);

      return id;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  getPostByIdLogic = async (id: string): Promise<IPostType> => {
    try {
      if (!id) {
        throw new Error("Id must be provided.");
      }

      const post: IPostType = await PostData.getPostByIdData(id);

      return post;
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

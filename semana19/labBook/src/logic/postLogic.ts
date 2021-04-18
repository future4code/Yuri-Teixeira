import { postType, POST_TYPES } from "../model/postModel";
import _tokenManager from "../services/tokenManager";
import _PostData from "../data/postData";
import idGenerator from "../services/idGenerator";
import moment from "moment";

const PostData = new _PostData();

export default class postLogic {
  createPostLogic = async (
    photo: string,
    description: string,
    type: string,
    authorization: string
  ) => {
    try {
      const tokenManager = new _tokenManager();

      if (!photo || !description || !type) {
        throw new Error("Photom description and type mus be provided.");
      }
      if (!authorization) {
        throw new Error("You must be logged in to do this action.");
      }

      const authorId = tokenManager.getTokenData(authorization);
      const id = idGenerator();

      const newPost: postType = {
        id,
        photo,
        description,
        type: type as POST_TYPES,
        createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
        authorId: authorId.id,
      };

      await PostData.createPostData(newPost);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  getPostByIdLogic = async (id: string) => {
    try {
      if (!id) {
        throw new Error("Id must be provided.");
      }
      const post = await PostData.getPostByIdData(id);

      return post;
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

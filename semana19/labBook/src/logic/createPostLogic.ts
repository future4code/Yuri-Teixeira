import { postType, POST_TYPES } from "../model/postModel";
import _tokenManager from "../services/tokenManager";
import createPostData from "../data/createPostData";
import idGenerator from "../services/idGenerator";
import moment from "moment";

const createPostLogic = async (
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

    await createPostData(newPost);
  } catch (error) {
    throw new Error(error.message);
  }
};

export default createPostLogic;

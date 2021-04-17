import connection from "../controller/connection";
import { postType } from "../model/postModel";

const createPostData = async (post: postType) => {
  try {
    return await connection(`labook_posts`).insert({
      id: post.id,
      photo: post.photo,
      description: post.description,
      type: post.type,
      created_at: post.createdAt,
      author_id: post.authorId,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default createPostData;
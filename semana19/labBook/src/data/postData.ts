import connection from "../controller/connection";
import { IPostType } from "../model/postModel";

export default class PostData {

  createPostData = async (post: IPostType): Promise<void> => {
    try {
      await connection(`labook_posts`).insert({
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

  getPostByIdData = async (id: string): Promise<IPostType> => {
    try {
      const result = await connection.raw(
        `select * from labook_posts where id = '${id}'`
      );

      if (!result[0]) {
        throw new Error("Post not found");
      }

      return result[0];
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

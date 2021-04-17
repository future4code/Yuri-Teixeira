import connection from "../controller/connection";

const getPostByIdData = async (id: string) => {
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


export default getPostByIdData;
import getPostByIdData from "../data/getPostByIdData";

const getPostByIdLogic = async (id: string) => {
  try {
    if (!id) {
      throw new Error("Id must be provided.");
    }
    const post = await getPostByIdData(id);

    return post;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getPostByIdLogic;

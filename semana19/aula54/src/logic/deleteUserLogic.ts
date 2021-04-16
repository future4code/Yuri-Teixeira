import deleteUserData from "../data/deleteUserData";

const deleteUserLogic = async (id: string) => {
  try {
    if (!id) {
      throw new Error("Id must be informed");
    }

    return await deleteUserData(id);
  } catch (error) {
    throw new Error(error.message);
  }
};

export default deleteUserLogic;

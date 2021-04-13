import connection from "../connection";

const deleteUser = async (id: string) => {
  try {
    return await connection.raw(`delete from User_Arq where id = '${id}'`);
  } catch (error) {
    throw new Error(error.message);
  }
};

export default deleteUser;

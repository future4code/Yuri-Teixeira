import connection from "../connection";

export const getAllUsersData = async () => {
  try {
    const result = await connection.raw(`select * from User_Arq`);
    console.log('data',result[0]);
    return result;
  } catch (error) {
    throw new Error("Data: " + error.message);
  }
};

export default getAllUsersData;

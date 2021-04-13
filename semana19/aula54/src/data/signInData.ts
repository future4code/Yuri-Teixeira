import connection from "../connection";

export const getUserByEmail = async (email: string) => {
  try {
    const result = await connection(`User_Arq`).select(`*`).where({ email });

    if (!result[0]) {
      throw new Error("Email not found!");
    }
    

    return result[0];
  } catch (error) {
    throw new Error(error.sqlMessage || "Data: " + error.message);
  }
};

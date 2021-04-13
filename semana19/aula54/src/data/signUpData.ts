import connection from "../connection";
import { userType } from "../model/userModel";

export const createUser = async (newUser: userType) => {
  try {
     await connection(`User_Arq`).insert({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      role: newUser.role,
    });
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};

import connection from "../controller/connection";
import { userType } from "../model/userModel";

 const createUserData = async (newUser: userType) => {
  try {
    return await connection("labook_users").insert({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default createUserData;

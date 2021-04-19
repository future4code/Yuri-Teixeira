import connection from "../controller/connection";
import { IUser } from "../model/userModel";

export default class UserData {
  createUserData = async (newUser: IUser): Promise<void> => {
    try {
      return await connection("labook_users").insert({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
      });
    } catch (error) {
      throw new Error("Data: " + error.message);
    }
  };

  getUserByEmailData = async (email: string): Promise<IUser> => {
    try {
      const result = await connection(`labook_users`)
        .select(`*`)
        .where({ email });

      if (!result[0]) {
        throw new Error("Invalid username or password");
      }

      return result[0];
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

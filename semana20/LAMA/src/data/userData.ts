import { IUser } from "../model/userModel";
import connection from "../services/connection";

export class userData {
  async createUser(newUser: IUser): Promise<void> {
    try {
      await connection(`lama_users`).insert({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        role: newUser.role,
      });
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async getUserByEmail(email: string): Promise<IUser> {
    try {
      const result = await connection.raw(
        `select * from lama_users where email = '${email}'`
      );

      if (!result[0][0]) {
        throw new Error("Invalid username or password");
      }

      return result[0][0] as IUser;
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

export default new userData();

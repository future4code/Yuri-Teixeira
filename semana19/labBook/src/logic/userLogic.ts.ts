import _PostData from "../data/userData";
import _bcrypt from "../services/bcrypt";
import _tokenManager from "../services/tokenManager";
import idGenerator from "../services/idGenerator";
import { userType } from "../model/userModel";

const PostData = new _PostData();

export default class UserLogic {
  // Create a user
  createUserLogic = async (name: string, email: string, password: string) => {
    try {
      const bcrypt = new _bcrypt();
      const tokenManager = new _tokenManager();

      if (!name || !email || !password) {
        throw new Error('"name", "email" and "password" must be provided');
      }

      const id = idGenerator();
      const cypherPassword = await bcrypt.hash(password);

      const newUser: userType = {
        id,
        name,
        email,
        password: cypherPassword,
      };

      await PostData.createUserData(newUser);

      return tokenManager.generateToken({ id });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Get a user by email
  getUserByEmailLogic = async (email: string, password: string) => {
    try {
      const bcrypt = new _bcrypt();
      const tokenManager = new _tokenManager();

      if (!email || !password) {
        throw new Error("Email and password must be provided.");
      }

      const user: any = await PostData.getUserByEmailData(email);
      const validatePassword = await bcrypt.compare(password, user.password);

      if (!validatePassword) throw new Error("Invalid username or password.");

      const token = tokenManager.generateToken({ id: user.id });

      return token;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  
}

import _PostData from "../data/userData";
import _bcrypt from "../services/bcrypt";
import _tokenManager from "../services/tokenManager";
import idGenerator from "../services/idGenerator";
import { IInputUserDTO, IUser } from "../model/userModel";

const PostData = new _PostData();
const bcrypt = new _bcrypt();
const tokenManager = new _tokenManager();

export default class UserLogic {
  // Create user and return a token
  createUserLogic = async (inputUserDTO: IInputUserDTO) => {
    try {
      if (!inputUserDTO.name || !inputUserDTO.email || !inputUserDTO.password) {
        throw new Error('"name", "email" and "password" must be provided');
      }

      const id = idGenerator();
      const cypherPassword = await bcrypt.hash(inputUserDTO.password);

      const newUser: IUser = {
        id,
        name: inputUserDTO.name,
        email: inputUserDTO.email,
        password: cypherPassword,
      };

      await PostData.createUserData(newUser);

      return tokenManager.generateToken({ id });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Get user by email and return token
  getUserByEmailLogic = async (
    email: string,
    password: string
  ): Promise<string> => {
    try {
      if (!email || !password) {
        throw new Error("Email and password must be provided.");
      }

      const user: IUser = await PostData.getUserByEmailData(email);
      const validatePassword = await bcrypt.compare(password, user.password);

      if (!validatePassword) {
        throw new Error("Invalid username or password.");
      }

      const token: string = tokenManager.generateToken({ id: user.id });

      return token;
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

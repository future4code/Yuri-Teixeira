import userData from "../data/userData";
import CustomError from "../errors/customError";
import { IInputUserDTO, IUser, IInputLogin } from "../model/userModel";
import idGenerator from "../services/idGenerator";
import tokenManager from "../services/tokenManager";
import bcrypt from "../services/bcrypt";

export class userLogic {
  async signUp(inputUserDTO: IInputUserDTO): Promise<string> {
    try {
      if (
        !inputUserDTO.name ||
        !inputUserDTO.email ||
        !inputUserDTO.password ||
        !inputUserDTO.role
      ) {
        throw new CustomError(
          406,
          "Name, email, password and role must be valid."
        );
      }

      const id = idGenerator();
      const newUser: IUser = {
        id,
        name: inputUserDTO.name,
        email: inputUserDTO.email,
        password: await bcrypt.hash(inputUserDTO.password),
        role: inputUserDTO.role,
      };

      await userData.createUser(newUser);

      return tokenManager.generateToken(id);
    } catch (error) {
      throw new CustomError(400, error.message);
    }
  }

  async signIn(inputLogin: IInputLogin): Promise<string> {
    try {
      if (!inputLogin.email) {
        throw new Error("Email must be valid");
      }

      const user: IUser = await userData.getUserByEmail(inputLogin.email);
      const validatePassword = await bcrypt.compare(
        inputLogin.password,
        user.password
      );

      if (!validatePassword) {
        throw new Error("Invalid username or password.");
      }

      return tokenManager.generateToken(user.id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new userLogic();

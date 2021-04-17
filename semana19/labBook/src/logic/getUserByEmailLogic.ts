import getUserByEmailData from "../data/getUserByEmailData";
import _bcrypt from "../services/bcrypt";
import { userType } from "../model/userModel";
import _tokenManager from '../services/tokenManager'

const getUserByEmailLogic = async (email: string, password: string) => {
  try {
    const bcrypt = new _bcrypt();
    const tokenManager = new _tokenManager();

    if (!email || !password) {
      throw new Error("Email and password must be provided.");
    }

    const user: any = await getUserByEmailData(email);
    const validatePassword = await bcrypt.compare(password, user.password);

    if (!validatePassword) throw new Error("Invalid username or password.");

    const token = tokenManager.generateToken({id: user.id})
    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getUserByEmailLogic;

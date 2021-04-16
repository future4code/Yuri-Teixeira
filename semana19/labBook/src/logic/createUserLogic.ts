import createUserData from "../data/userData";
import _bcrypt from "../services/bcrypt";
import _tokenManager from "../services/tokenManager";
import _idGenerator from "../services/idGenerator";
import { userType } from "../model/userModel";

const createUserLogic = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const bcrypt = new _bcrypt();
    const tokenManager = new _tokenManager();
    const idGenerator = new _idGenerator();

    if (!name || !email || !password) {
      throw new Error('"name", "email" and "password" must be provided');
    }

    const id = idGenerator.generateId();
    const cypherPassword = await bcrypt.hash(password);

    const newUser: userType = {
      id,
      name,
      email,
      password: cypherPassword,
    };

    await createUserData(newUser);

    return tokenManager.generateToken({ id });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default createUserLogic;

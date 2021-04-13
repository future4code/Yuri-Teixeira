import { compare } from "../services/hashManager";
import * as authenticator from '../services/authenticator'
import { getUserByEmail } from "../data/signInData";

export const signInLogic = async(email: string, password: string) => {
  try {
    if (!email || !password) {
      throw new Error("Email and password must me informed.");
    }

    const user = await getUserByEmail(email);
    const resultCompare = await compare(password, user.password);

    if(!resultCompare){
      throw new Error("Invalid email or password.");
    }

    const token = authenticator.generateToken({id: user.id})

    return token;
  } catch (error) {
    throw new Error("Logic: " + error.message);
  }
};

import { userType } from "../model/userModel";
import { generateId } from "../services/idGenerator";
import { hash, compare } from "../services/hashManager";
import * as signUpData from "../data/signUpData";
import { generateToken } from "../services/authenticator";

export const createUser = async (userInputType: userType) => {
  try {
    if (
      !userInputType.name ||
      !userInputType.email ||
      !userInputType.password ||
      !userInputType.role
    ) {
      throw new Error("All fields must be informed.");
    }

    const newId = generateId();
    const newUser = {
      id: newId,
      name: userInputType.name,
      email: userInputType.email,
      password: await hash(userInputType.password),
      role: userInputType.role,
    } as userType;

    await signUpData.createUser(newUser);

    const token = generateToken({
      id: newUser.id as string,
      role: newUser.role,
    });

    return token;
  } catch (error) {
    throw new Error(error.message || "Error creating user. Please check your system administrator.");
  }
};

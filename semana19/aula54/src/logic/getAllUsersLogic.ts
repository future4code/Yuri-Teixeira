import getAllUsersData from "../data/getAllUsersData";
import { getTokenData } from "../services/authenticator";

export const getAllUsersLogic = async (token: string) => {
  try {
    if (!token) {
      throw new Error("You must be logged in");
    }
    console.log(token);

    getTokenData(token);
    const users = await getAllUsersData();

    return users;
  } catch (error) {
    throw new Error("Logic: " + error.message);
  }
};

export default getAllUsersLogic;

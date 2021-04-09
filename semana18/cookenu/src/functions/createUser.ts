import connection from "../connection";
import { userType } from "../types/types";

const createUser = async (user: userType) => {
  return await connection(`cookenu_users`).insert({ user });
};

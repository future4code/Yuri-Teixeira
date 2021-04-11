import connection from "../connection";
import { userType } from "../types/types";

const createUser = async (user: userType) => {
  return await connection(`cookenu_users`).insert({
    id: user.id,
    email: user.email,
    name: user.name,
    password: user.password,
  });
};

export default createUser;

import connection from "./connection";
import { userType } from "./types";

export const newUser = async (user: userType) => {
  return await connection(`users`).insert({
    id: user.id,
    email: user.email,
    password: user.password,
    role: user.role,
  });
};

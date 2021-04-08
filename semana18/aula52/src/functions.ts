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

export const getUserByEmail = async (email: string) => {
  const result = await connection(`users`)
    .select(`id`, `password`, `role`)
    .where({ email: email });
  return result[0];
};

export const deleteUser = async (id: string) => {
  return await connection.raw(`delete from users where id = '${id}'`);
};

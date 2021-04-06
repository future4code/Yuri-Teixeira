import connection from "./connection";

export const createUser = async (
  id: string,
  email: string,
  password: string
) => {
  return await connection(`users`).insert({
    id: id,
    email: email,
    password: password,
  });
};

export const getUsers = async () => {
  return await connection(`users`).orderBy("id", "desc");
};

export const getUserByEmail = async (email: string) => {
  return await connection(`users`).where({ email: email });
};

export const getUserById = async (id: string) => {
  return await connection(`users`).where({ id });
};

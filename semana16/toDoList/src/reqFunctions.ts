import connection from "./connection";

export const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<any> => {
  await connection
    .insert({ name: name, nickname: nickname, email: email })
    .into(`users`);
};

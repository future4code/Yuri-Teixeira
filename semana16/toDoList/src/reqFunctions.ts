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

export const getUserById = async (id: string): Promise<any> => {
  return await connection
    .select("id", "nickname")
    .from(`users`)
    .where(`id`, id);
};

export const editUser = async (
  id: string,
  name: string,
  nickname: string,
  email: string
): Promise<any> => {
  await connection(`users`)
    .update({
      name: name,
      nickname: nickname,
      email: email,
    })
    .where({ id: id });
};

export const createTask = async (
  title: string,
  description: string,
  limitDate: string,
  status: string,
  id_createdby: string
): Promise<any> => {
  return await connection("tasks").insert({
    title: title,
    description: description,
    limitDate: limitDate,
    status: status,
    id_createdby: id_createdby,
  });
};

export const getTasks = async (id?: string): Promise<any> => {
  if(!id){
    return  await connection(`tasks`);
  } else {
    return  await connection(`tasks`).where({ id: id });
  }
 
};

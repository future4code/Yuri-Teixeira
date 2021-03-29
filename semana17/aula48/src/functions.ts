import connection from "./connection";

export const selectAllUsers = async (nameFilter: string): Promise<any> => {
  const result = await connection.raw(`
     SELECT id, name, email, type
     FROM aula48_exercicio
     where name like '%${nameFilter}%'
  `);

  return result[0];
};

export const selectAllUsers2 = async (typerUser: string): Promise<any> => {
  const result = await connection.raw(`
     SELECT id, name, email, type
     FROM aula48_exercicio
     where type='${typerUser}'
  `);

  return result[0];
};

export const selectAllUsers3 = async (
  orderBy: string = "ASC"
): Promise<any> => {
  const result = await connection.raw(`
     SELECT id, name, email, type
     FROM aula48_exercicio
     order by email ${orderBy}
  `);

  return result[0];
};

export const selectAllUsers4 = async (
  limit: string,
  offset: string
): Promise<any> => {
  const result = await connection.raw(`
     SELECT id, name, email, type
     FROM aula48_exercicio
     limit ${limit}
     offset ${offset}
  `);

  return result[0];
};

export const selectAllUsers5 = async (
  offset: string,
  orderBy: string = "ASC",
  nameFilter: string
): Promise<any> => {
  const result = await connection.raw(`
     SELECT id, name, email, type
     FROM aula48_exercicio
     where name like '%${nameFilter}%'
     order by email ${orderBy}
     limit 5
     offset ${offset}
  `);

  return result[0];
};

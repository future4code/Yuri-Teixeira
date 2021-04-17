import connection from "../controller/connection";

const getUserByEmailData = async (email: string) => {
  try {
    const result = await connection(`labook_users`)
      .select(`*`)
      .where({ email });
    if (!result[0]) {
      throw new Error("Invalid username or password");
    }
    return result[0];
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getUserByEmailData;

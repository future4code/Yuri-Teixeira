import connection from "../connection";
import { compareHash } from "../services/bcrypt";
import { generateToken } from "../services/manageTokens";

const signIn = async (email: string, password: string) => {
  const [RowDataPacket] = await connection(`cookenu_users`)
    .select(`password`, `id`)
    .where({ email });
  if (RowDataPacket) {
    if (await compareHash(password, RowDataPacket.password)) {
      return { token: generateToken(RowDataPacket.id) };
    } else {
      throw new Error("Invalid username or password");
    }
  } else {
    throw new Error("Invalid username or password");
  }
};

export default signIn;

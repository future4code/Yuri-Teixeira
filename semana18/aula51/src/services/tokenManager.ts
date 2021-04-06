import jwt from "jsonwebtoken";
import dontenv from "dotenv";

dontenv.config();

export const genToken = async (valueToEncode: any) => {
  const key: string = process.env.KEY as string;
  const result = await jwt.sign(valueToEncode, key, { expiresIn: "2h" });
  return result;
};

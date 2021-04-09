import * as bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export const generateHash = async (value: string) => {
  const rounds = Number(process.env.ENCRYPT_COST);
  const salt = await bcrypt.genSalt(rounds);
  const hash = await bcrypt.hash(value, salt);
  return hash;
};

export const compareHash = async (
  value: string,
  hashToCompare: string
): Promise<boolean> => {
  return await bcrypt.compare(value, hashToCompare);
};

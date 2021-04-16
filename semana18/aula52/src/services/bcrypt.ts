import * as bcrypt from "bcryptjs";

export const genHash = async (value: string) => {
  const rounds = Number(process.env.ENCRYPT_COST);
  const salt = await bcrypt.genSalt(rounds);
  const hash = await bcrypt.hash(value, salt);
  console.log("HASH: ", hash);
  return hash;
};

export const cmpHash = async (
  hashA: string,
  hashB: string
): Promise<boolean> => {
  return await bcrypt.compare(hashA, hashB);
};

import * as bcryptjs from "bcryptjs";

export class bcrypt {
  hash = async (plainText: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcryptjs.genSalt(rounds);
    return bcryptjs.hash(plainText, salt);
  };

  compare = async (plainText: string, cypherText: string): Promise<boolean> => {
    return bcryptjs.compare(plainText, cypherText);
  };
}

export default new bcrypt();

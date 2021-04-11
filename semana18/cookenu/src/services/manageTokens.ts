import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const generateToken = (valueToEncode: any) => {
  const key: string = process.env.BCRYPT_KEY as string;
  const token = jwt.sign({ valueEncoded: valueToEncode }, key!, {
    expiresIn: "1day",
  });
  return token;
};

export const decodeToken = (valueToDecode: any) => {
  const { valueEncoded } = jwt.verify(valueToDecode, process.env.BCRYPT_KEY!) as any;
  return valueEncoded;
};

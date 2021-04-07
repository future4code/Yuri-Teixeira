import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const genToken = (valueToEncode: any) => {
  const key: string = process.env.KEY as string;
  const token = jwt.sign({ valueEncoded: valueToEncode }, key!, {
    expiresIn: "1day",
  });
  return token;
};

export const verToken = (valueToVerify: any) => {
  const { valueEncoded } = jwt.verify(valueToVerify, process.env.KEY!) as any;
  return valueEncoded;
};

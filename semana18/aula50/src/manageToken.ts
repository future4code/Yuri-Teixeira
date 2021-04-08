import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

type AuthenticationData = {
  id: string;
};

export const generationToken = (id: AuthenticationData): string => {
  const token = jwt.sign(
    {
      id,
    },
    process.env.KEYTOKEN!,
    {
      expiresIn: "1day",
    }
  );

  return token;
};

export const validToken = (token: string) => {
  const validation = jwt.verify(token,process.env.KEYTOKEN as string) as any
  console.log(validation);
  const {id} = validation;
  return id; 
}
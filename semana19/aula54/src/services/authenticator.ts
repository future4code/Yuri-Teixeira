import * as jwt from "jsonwebtoken";
import { role } from "../model/userModel";

export type AuthenticationData = {
  id: string;
  role: role;
};

export function generateToken(payload: any): string {
  return jwt.sign(payload, process.env.KEY as string, {
    expiresIn: "1day",
  });
}

export function getTokenData(token: string): any {
  return jwt.verify(token, process.env.KEY as string);
}

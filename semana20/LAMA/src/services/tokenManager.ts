import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { IAuthenticationUserData } from "../model/userModel";

dotenv.config();

export class tokenManager {
  generateToken(payload: any): string {
    return jwt.sign({ payload }, process.env.JWT_KEY as string, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  }

  getTokenData(token: string): IAuthenticationUserData {
    const result: any = jwt.verify(token, process.env.JWT_KEY as string);

    return { id: result.id };
  }
}

export default new tokenManager();

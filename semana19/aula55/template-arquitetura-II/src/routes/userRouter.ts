import express from "express";
import { signup } from "../controller/signup";
import { login } from "../controller/login";

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);

export default userRouter;

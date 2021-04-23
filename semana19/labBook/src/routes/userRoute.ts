import express from "express";
import _UserController from "../controller/userController";

const userRoute = express.Router();
const UserController = new _UserController();

userRoute.post("/signup", UserController.signUp);
userRoute.post("/signin", UserController.signIn);

export default userRoute;

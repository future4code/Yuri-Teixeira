import express from "express";
import signUp from '../controller/signUp'

const userRoute = express.Router();

userRoute.post("/signup", signUp)

export default userRoute;
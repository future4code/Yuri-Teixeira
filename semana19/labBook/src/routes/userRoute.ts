import express from "express";
import signUp from '../controller/signUp'
import signIn from '../controller/signIn'

const userRoute = express.Router();

userRoute.post("/signup", signUp)
userRoute.post("/signin", signIn)

export default userRoute;
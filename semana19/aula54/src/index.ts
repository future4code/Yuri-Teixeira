import app from "./app";

import signUp from "./controller/signUpController";
import signIn from "./controller/signInController";
import getAllUsers from "./controller/getAllUsersController";
import deleteUser from "./controller/deleteUserController";

app.post("/signup", signUp);
app.post("/signin", signIn);
app.get("/all", getAllUsers);
app.delete("/:id", deleteUser);

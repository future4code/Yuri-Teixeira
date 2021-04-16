import app from "./controller/app";
import userRoute from "./routes/userRoute";

app.use("/user", userRoute);

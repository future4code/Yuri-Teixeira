import app from "./controller/app";
import userRoute from "./routes/userRoute";
import postRoute from "./routes/postRoute";

app.use("/user", userRoute);
app.use("/post", postRoute);

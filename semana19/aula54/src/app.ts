import express from "express";
import cors from "cors";

const app = express();
const port = 3003;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`App is runnin on port ${port}`);
});

export default app;

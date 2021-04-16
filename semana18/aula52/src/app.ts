import express from "express";
import cors from "cors";

export const port = 3003;
const app = express();

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

export default app;

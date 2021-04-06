import express from "express";

const port = 3003;
const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});

export default app;

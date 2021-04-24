import express from "express";

const app = express();
const port = 3003;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

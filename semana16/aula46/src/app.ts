import express from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app = express();
app.use(express.json());
app.use(cors());

const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running on port ${address.port}`);
  } else {
    console.log(`Failure start server`);
  }
});

export default app;

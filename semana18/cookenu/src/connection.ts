import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    multiStatements: true,
  },
});

export default connection;

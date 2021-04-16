import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 3306,
    multiStatements: true,
  },
});

export default connection;
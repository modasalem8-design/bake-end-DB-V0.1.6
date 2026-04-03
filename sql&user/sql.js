import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();
const configX = {
  production: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  development: {
    host: 'localhost',
    port: "3306",
    user: "root",
    password: "",
    database: "ins",
  },
};
const dbConfig = process.env.DEVELOPMENT === "1" ? configX.development : configX.production
 console.log(dbConfig)
const db = await mysql.createConnection(dbConfig);

console.log("✅ Connected to DB");

export default db;

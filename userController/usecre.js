import db from "../sql&user/sql.js";
import express from "express";
import router from "../routs/user.js";
import { UserSchema } from "../Middleware/user.schema.js";
import bcrypt from "bcrypt";
//jwt?
import jwt from "jsonwebtoken";
//dotenv
import dotenv from "dotenv";
import Joi from "joi";
//ربط الملف الحالي بي .env

dotenv.config();
const create = express();
create.use(express.json());
create.use(express.Router());
//تجربة للسيرفر

//هيتحذف
create.get("/create",UserSchema, async (req, res) => {
  res.json("good in create");
});
// انشاء حساب والتأمين  واستخدام مكتبة joi
create.post("/create", async (req, res) => {
  
  const { name, pass } = req.body;
  const [nam] = await db.query("SELECT * FROM `log` WHERE `name`=? ", [name]);

  if (nam.length > 0) {
    return res.status(409).json({ error: "please Enter another name or pass" });
  }
  const query = "INSERT INTO `log`( `name`, `pass`) VALUES (?,?)";
  const bcryptpass = await bcrypt.hashSync(pass, 10);
  const NU = await db.query(query, [name, bcryptpass]);
  const token = jwt.sign(
    {
      id: NU.insertID,
      role: "user",
    },
    process.env.SMS_SECRET,
    { expiresIn: "1h" },
  );
  console.log(token);

  return res.json({
    message: "account successfull",
    user: { id: NU.insertID, name, bcryptpass, token },
  });
});
export default create;

//استدعائات
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import express from "express";
import db from "../sql&user/sql.js";
import bcrypt from "bcrypt";
import { UserSchema } from "../Middleware/user.schema.js";
import Joi from "joi";
//تعريفات
const sign = express();
sign.use(express.json());
dotenv.config();
//تجربة للسيرفر
//توكن والتحقق

function auth(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.json("error in token");
  jwt.verify(token, process.env.SMS_SECRET, (err, user) => {
    if (err) return res.json({ TokenError: "erorr in token not verify" });
    req.user = user;
    next();
  });
}
//joi  للتحقق من الاخطاء بدون تكرار الكود

sign.get("/sign", auth, async (req, res) => {
  res.json("good in sign");
  // res.json(
  //   sign.filter((post) => {
  //     post.user === req.user.name;
    }),
//   );
// });
//تكملة للسيرفر
sign.post("/sign", UserSchema, async (req, res) => {
  const { name, pass } = req.body;
  const [sin] = await db.query("SELECT * FROM `log` WHERE `name`=?", [name]);
  if (sin.length === 0) {
    res.status(403).json("user is undfind");
  }
  const user = sin[0];
  const ant = await bcrypt.compare(pass, user.pass);
  if (!ant) {
    return res.status(502).json("error in pass");
  }
  const token = jwt.sign(
    { id: ant.insertId, role: "user" },
    process.env.SMS_SECRET,
    { expiresIn: "1h" },
  );
  res.json({
    message: "sign up successful",
    user: { id: user.id, name: user.name, token },
  });
});
export default sign;

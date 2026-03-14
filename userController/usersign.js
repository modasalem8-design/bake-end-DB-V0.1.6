//استدعائات
import express from "express";
import db from "../sql&user/sql.js";
import bcrypt from "bcrypt";
//تعريفات
const sign = express();
sign.use(express.json());
//تجربة للسيرفر
//هيتحذف
sign.get("/sign", async (req, res) => {
  res.json("good in sign")
})
//تكملة للسيرفر
sign.post("/sign", async (req, res) => {

  try {
    const { name, pass } = req.body;
    if (!name || !pass) {
      return res.status(404).json("invailed name and pass");
    }

    const [sin] = await db.query("SELECT * FROM `log` WHERE `name`=?", [name]);
    if (sin.length === 0) {
      res.status(403).json("user is undfind");
    }
    const user = sin[0];
    const ant = await bcrypt.compare(pass, user.pass);
    if (!ant) {
      return res.status(502).json("error in pass");
    }
    res.json({
      message: "connect good",
      user: { name: user.name, pass: user.pass },
    });
  } catch (err) {
    res.status(501).json("error in sign js");
  }
});
export default sign;

import db from "../sql&user/sql.js";
import express from "express";
import router from "../routs/user.js";
import bcrypt from "bcrypt";
const create = express();
create.use(express.json());
create.use(express.Router())
//تجربة للسيرفر
//هيتحذف
create.get("/create", async (req, res) => {
  res.json("good in create")
})
create.post("/create", async (req, res) => {
  try {
    const { name, pass } = req.body;
    if (!pass || !name || name == "OR'1'='1'") {
      return res.status(401).json("invaild name or pass");
    }

    const [nam] = await db.query("SELECT * FROM `log` WHERE `name`=? ", [name]);

    if (nam.length > 0) {
      return res.status(409).json({ error: "please Enter another name " })
    }
    const query = "INSERT INTO `log`( `name`, `pass`) VALUES (?,?)";
    const bcryptpass = bcrypt.hashSync(pass, 10);
    const bb = await db.query(query, [name, bcryptpass]);
    return res.json({
      message: "account succesfull",
      user: { id: bb.insertID, name }
    });
  } catch (error) {
    console.error("error in create acount in user", error);
    return res.status(500).json("Internal Server Error");
  }
});
export default create;

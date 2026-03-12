import db from "../sql&user/sql.js";
import express from "express";
import router from "../routs/user.js";
import bcrypt from "bcrypt";
const create = express();
create.use(express.json());
create.post("/create", async (req, res) => {
  try {
    const { name, pass } = req.body;
    if (!pass) {
      return res.status(501).json("invaild pass");
    }
    if (!name || name == "OR'1'='1'") {
      return res.status(502).json("invaild name ");
    }
    const [nam] = await db.query("SELECT * FROM `log` WHERE `name`=?", [name]);
    if (nam.length > 0) {
      return res.status(506).json("bad in create");
    }
    const query = "INSERT INTO `log`( `name`, `pass`) VALUES (?,?)";
    const bcryptpass = bcrypt.hashSync(pass, 10);
    await db.query(query, [name, bcryptpass]);
    return res.json("account succesfull");
  } catch (error) {
    console.error("error in create acount in user", error);
    return res.status(500).json("Internal Server Error");
  }
});
export default create;

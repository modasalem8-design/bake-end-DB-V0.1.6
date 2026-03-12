import db from "../sql&user/sql.js";
import express from 'express'
import router from "../routs/user.js";
import bcrypt from "bcrypt"
const create = (express())
create.use(express.json())
create.post('/create', async (req, res) => {
    try {
        //  اتصال query
       
        const { name, pass } = req.body;
         if(!name||!pass){
            return res.status(501).json("faild empaty name or pass")
        }
        const [num] = await db.query("SELECT * FROM `log` WHERE `name`=?", [name])
        if (num.length > 0) {
             return res.status(301).json("the name is token for auther people")
        }
        const query = ("INSERT INTO `log`( `name`, `pass`) VALUES (?,?)")
        const bcryptpass = bcrypt.hashSync(pass, 10);
        const [result] = await db.query(query, [name, bcryptpass])
        res.status(202).json("connected in user")
        //  ايجاد مستخدم 
    } catch (error) {
        console.error("err in user")
        res.status(501).json("err in user create account .js")
    }
})
export default create;
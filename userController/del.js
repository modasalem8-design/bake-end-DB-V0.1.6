import db from "../sql&user/sql.js";
import express from "express";
import Joi from "joi";
import {UserSchema } from "../Middleware/user.schema.js"
const del = (express());
del.use(express.json());
//تجربة
del.get("/del", async (req, res) => {
    res.json("connect to del")
})
//التأكيد من الاخطأ وتقليل السطور

del.delete("/del",UserSchema , async (req, res) => {
   
     
        const { id,name, pass } = req.body
      
        const [rows] = ("SELECT * FROM `log` WHERE `name`=? ",[name])
        if (rows.length === 0) {
            return res.json("error user undfind")
        }
        const user=rows[0]
        const [dele] = await db.query("DELETE FROM `log` WHERE `name`=? ", [name])
        if (dele.affectedRows === 0) {
            return res.json("error in delete name or pass undfind")
        }
        res.json({
            message:"successfull delete",
            user: user.name
        })
   
})
export default del
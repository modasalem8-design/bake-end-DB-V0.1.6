//استدعائات 
import express from "express"
import db from "../sql&user/sql.js"
import bcrypt from "bcrypt"
//تعريفات
const samx =(express())
samx.use(express.json())
samx.get('/sign',(req,res)=>{
    res.status(201).json("gg in sign")
})
//تصدير sign  للخارج
export default samx
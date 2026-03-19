//استدعائات
import express from "express";
import db from "../sql&user/sql.js"
//تعريفات وروابط
const crep = (express())
crep.use(express.json())
//تجربة 
crep.get('/crep', (req, res) => {
    res.json({ form: "hello in create post" })
})
//اتصال بي الجدول post
crep.post('/crep', async(req, res) => {
    try {
        const { send, com } = req.body
        const post = "INSERT INTO `post`( `send`, `com`) VALUES (?,?)"
        const po = await db.query(post,[send,com])
        res.json({ mesage: "create post susecfull" 
            ,send,com
        })
        
    } catch(error){
        return res.json({error:"error in create post"})
     }
})
export default crep
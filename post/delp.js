//استدعائات
import express from "express";
import db from "../sql&user/sql.js";
//تعريفات
const delp = (express())
delp.use(express.json())
//تجربة
delp.get('/delp', async (req, res) => {
    res.json({ message: "conect in delete post" })
})
//حذف post
delp.delete('/delp', async (req, res) => {
    try {
        const { send, com } = req.body
        const sel = await db.query("SELECT * FROM `post` WHERE `send`=?", [send])
        if (sel > 0)
            return res.json({ error: "post not defind" })
        const [del] = await db.query("DELETE FROM `post` WHERE `send`=?", [send])
        if (del.affectedRows === 0) {
            return res.json({error:"error in delete "})
        }
        res.json({message:"sucsesful in delete post"})
    } catch (error) {
        return res.json({ error: "error in delete post" })
    }
})
export default delp
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
delp.delete('/delp/:id', async (req, res) => {
    try {
        const { id } = req.params
        const [del] = await db.query("DELETE FROM `post` WHERE `id`=?", [id])
        if (del.affectedRows === 0) {
            return res.json({error:"error in delete "})
        }
        res.json({message:"sucsesful in delete post"})
    } catch (error) {
        return res.json({ error: "error in delete post" })
    }
})
export default delp
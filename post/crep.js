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
//جلب كل البوستات
crep.get('/all', async (req, res) => {
    try {
        const [posts] = await db.query("SELECT * FROM `post` ORDER BY `id` DESC")
        res.json(posts)
    } catch(error){
        return res.json({error:"error in get posts"})
     }
})
//اتصال بي الجدول post
crep.post('/crep', async(req, res) => {
    try {
        const { send, com, user_id } = req.body
        const post = "INSERT INTO `post`( `send`, `com`, `user_id`) VALUES (?,?,?)"
        const po = await db.query(post,[send,com, user_id])
        res.json({ mesage: "create post susecfull" 
            ,send,com
        })
    } catch(error){
        return res.json({error:"error in create post"})
     }
})
//جلب بوستات مستخدم معين
crep.get('/user/:userId', async (req, res) => {
    try {
        const { userId } = req.params
        const [posts] = await db.query("SELECT * FROM `post` WHERE `user_id`=? ORDER BY `id` DESC", [userId])
        res.json(posts)
    } catch(error){
        return res.json({error:"error in get user posts"})
     }
})
export default crep
//استدعائات
import express from "express";
import db from "../sql&user/sql.js";
//تعريفات
const uppost = (express())
uppost.use(express.json())
//تجربة
uppost.get('/update', async (req, res) => {
    res.json({ conecte: "conected to update post" })
})
//اساسي تعريف الرابط للفيتش والتعميم
uppost.put('/update/post/:id', async (req, res) => {
    //تعريف المتغيرات واسنادها لجسم الصفحة
    try {
        const upt = req.params.id
        const {send, com } = req.body
        if (!upt)
           return res.send("error")
        const [apr] = await db.execute("UPDATE `post` SET `send`=?,`com`=? WHERE `id`=?", [send, com, upt])
        // لو ملقاش البوست اساسا
        if (apr.affectedRows === 0) {
            return res.json({ error: "post undfind" })
        }
        //اذا تم التحديث بنجاح
        return res.json({ message: "update finsh&successful" })
    }
    //امساك الخطأ
    catch (err) {
        res.json({ error: err })
    }
})
//تصدير
export default uppost
//فديو https://www.youtube.com/watch?v=POLAAFGdyzE&t=432s
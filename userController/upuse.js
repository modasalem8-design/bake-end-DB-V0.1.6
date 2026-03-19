//استدعائات
import e from "express";
import db from "../sql&user/sql.js";
//تعريفات 
const upuse = (e())
upuse.use(e.json())
//تجربة 
upuse.get('/upuse', (req, res) => {
    res.json({ message: "good update.js" })
})
//اساسي 
upuse.put('/upuse/:id', async (req, res) => {
    try {
        //تعريف id وارسال البيانات لjson
        const ai = req.params.id
        const { name, pass } = req.body
        //اكتشاف خطأ
        if (!ai)
            //رجوع وايقاف فوري للسيرفر عند وقع الخطأ
            return res.json({ message: "error" })
        //تعريف التحديث
        const [dn] = await db.execute("UPDATE `log` SET `name`=?,`pass`=? WHERE `id`=?", [ name, pass,ai])
        //لو ملقاش الا id اصلا
        if (dn.affectedRows === 0){
            //رجوع بي الخطا وايقاف السيرفر مؤقتا
            return res.json({ error: "user undfind" })}
        //لو عدى كل الي فات يبقى نجح التحديث للمستخدم
        res.json({ message: "update user successful" })
        //
    } catch (err) {
        console.err(err)
        res.json({ error: "error in update user" })
    }
})
//تصدير
export default upuse
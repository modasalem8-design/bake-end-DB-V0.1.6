//استدعائات
import db from '../sql&user/sql.js'
// import conuse from "../sql&user/conuse.js"
import express, { Router } from 'express'
//تعريفات
const router = express.Router()
router.use(express.json())
 
// الربط وجلب المستخدمين في المتصفح
router.get('/user', async (req, res) => {
    try {
     const [rows]= await db.query("SELECT * FROM `log`")
        console.log("array")
        console.log(rows)
        res.status(201).json(rows)
    } catch (error) {
        console.error("error in user.js", error)
        return res.status(501).json({ error: "error in user.js" })
    }
})
export default router;



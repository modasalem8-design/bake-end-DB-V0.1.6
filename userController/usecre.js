import db from "../sql&user/sql.js";
import express from 'express'
import router from "../routs/user.js";
import bcrypt from "bcrypt"
const create = (express())
create.use(express.json())
create.post('/create', async (req, res) => {
    try {
        const { name, pass } = req.body;

        // 1. التأكد من البيانات
        if (!name || !pass) {
            return res.status(400).json("faild empty name or pass"); 
        }

        // 2. الكشف عن الاسم
        const [num] = await db.query("SELECT * FROM `log` WHERE `name`=?", [name]);

        // 3. المنطق الصحيح (لو الاسم موجود فعلاً)
        if (num.length > 0) {
            return res.status(409).json("this name is already taken");
            // الـ return هنا بتمنع السيرفر إنه ينزل يعمل INSERT
        }

        // 4. التشفير والحفظ
        const query = "INSERT INTO `log` (`name`, `pass`) VALUES (?,?)";
        const bcryptpass = bcrypt.hashSync(pass, 10);
        
        await db.query(query, [name, bcryptpass]);
        
        // 5. الرد النهائي في حالة النجاح
        return res.status(201).json("Account created successfully");

    } catch (error) {
        console.error("Database Error:", error);
        // لازم return هنا كمان عشان لو حصل خطأ ما يحاولش يبعت رد تاني بره الـ catch
        return res.status(500).json("Internal Server Error");
    }
});
export default create;
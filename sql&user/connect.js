//استدعائات الملفات
import e from "express";
import router from "../routs/user.js";
import create from '../userController/usecre.js';
import sign from '../userController/usersign.js';
import up from '../routs/upload.js';
import del from '../userController/del.js';
import crep from "../post/crep.js";
import delp from '../post/delp.js';
import cors from 'cors';
import uppost from '../post/uppost.js';
import upuse from '../userController/upuse.js';
import time from "../Middleware/user.time.js";

//تعريفات
const app2 = (e())
app2.use(e.json())
app2.use(e.json())
app2.use(cors())
app2.use(router)
//استدعائات انشاء الحساب
app2.use(create)
//استدعائات تسجيل الدخول
app2.use(sign)
//رفع صور
app2.use(up)
//حذف مستخدم
app2.use(del)
//اضافة post
app2.use(crep)
//حذف post
app2.use(delp)
//تحديث او تعديل الpost
app2.use(uppost)
//تحديث اسم المستخدم وكلمة المرور
app2.use(upuse)
//الوقت في time
app2.use(time)
// حماية النظام

// اكتشاف الاخطاء
//تجربة
// app2.use(schema)
//استخراج
export default app2
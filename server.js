//استدعائات
import express from 'express';
import cors from 'cors'
// import bcrypt from 'bcrypt'
// import db from "./sql-DB/sql.js"
import router from"./routs/user.js"
import create from './userController/usecre.js';
import samx from './userController/usersign.js';
// import f from''
//تعريفات
const app = express();
//الربط بين الموقع والباك
app.use(express.json())
app.use(cors())

app.use(router)
 //استدعائات انشاء الحساب
app.use(create)
//استدعائات تسجيل الدخول
app.use(samx)
const port =process.env.PORT||5000;
app.get('/',async(req,res)=>{
res.status(203).json("connect in server")})
console.log("connect in server")
// تشغيل سيرفر
app.listen(port,()=>{
    console.log(`server in ${port}`);
})
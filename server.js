//استدعائات
import express from 'express';
import cors from 'cors'
import bcrypt from 'bcrypt'
// import db from "./sql-DB/sql.js"
import router from"./routs/user.js"
import creat from './userController/usecre.js';
// import f from''
//تعريفات
const app = express();
app.use(express.json())
app.use(cors())
app.use(router)
app.use(creat)
const port =process.env.PORT||5000;

// تشغيل سيرفر
app.listen(port,()=>{
    console.log(`server in ${port}`);
})
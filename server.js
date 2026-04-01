//استدعائات
import express from 'express';
import dotenv from 'dotenv'
import app2 from './sql&user/connect.js'
// استعادة helmet لحماية النظام
import helmet from "helmet";
//تعريفات
const app = express();
dotenv.config()
app.use(helmet())
//الربط بين الموقع والباك
app.use(app2)


const PORT = process.env.PORT;
const pp='0.0.0.0';
app.get('/', async (req, res) => {
    res.status(203).json("connect in server")
})
app.use((req,res,next)=>{
    res.removeHeader('x-prowered-by')
})
console.log("connect in server")
// تشغيل سيرفر
app.listen(PORT ,pp, () => {
    console.log(`server in ${PORT}`);
})

//استدعائات
import express from 'express';
import dotenv from 'dotenv'
import app2 from './sql&user/connect.js'
//تعريفات
const app = express();
dotenv.config()
//الربط بين الموقع والباك
app.use(app2)
const PORT = process.env.PORT;
app.get('/', async (req, res) => {
    res.status(203).json("connect in server")
})
console.log("connect in server")
// تشغيل سيرفر
app.listen(PORT, () => {
    console.log(`server in ${PORT}`);
})

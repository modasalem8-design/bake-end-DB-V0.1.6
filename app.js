// //استدعائات
// import express from "express";
// import mysql2, { createConnection } from "mysql2/promise";
// import bcrypt from "bcrypt";
// import cors from "cors";
// //تعريفات
// const app = express();
// const port = process.env.PORT || 5000;
// //ربط واتصال
// app.use(express.json());
// app.use(cors());
// // الاتصال بين الباك والداتا
// // app.get("/user", async (req, res) => {
// // const db = await createConnection({
// //   host: "localhost",
// //   user: "root",
// //   password: "",
// //   database: "ins",
  
// // });
// // // مستخدمين استعداة للفرونت
// //     try {
// //       const sel = await db.query("SELECT * FROM `log`");
// //       const [rows] = sel;

// //       res.json(rows);
// //       console.log("inrows:",rows);
// //       await db.end()
// //       return rows;
      
// //     } catch (error) {
// //       res.status(203).send("conneted");
// //     }
// //   });
// //اتصال qury
// app.post("/create", async (req, res) => {
//   try {
//     const { name, pass } = req.body;
//     const query = "INSERT INTO `log`( `name`, `pass`) VALUES (?,?)";
//     const bcryptPass = bcrypt.hashSync(pass, 10);
//     const [result] = await db.query(query, [name, bcryptPass]);
//     res.json({ message: "good res" });
//   } catch (error) {
//     res.status(502).json("error", error);
//   }
// });
// // مستخدمين في الباك
// //تسجيل الدخول
// app.post('/login',async(req,res)=>{
//   try{
//     const {name,pass}=req.body;
//      const [rows] = await db.query("SELECT * FROM `log` WHERE name=?",[name]);
//    if(rows.length === 0){
//      res.send("error in lenght")
//     console.log("error")
//    }
//    const user=rows[0]
//      //ايجاد المسخدم
//     const psd=await bcrypt.compare(pass,user.pass)
//     if(!psd){
//     return res.status(203).json("fuck")
//     console.log(psd)}
//     res.json({
//       message:"sucesful login",
//       user:{name:user.name}
//   }
// )
//   }catch(error){
//     console.log("error in login",error)
//    return res.status(401).send("error in login:",error)
//   }})
// //تشغيل سيرفر
// app.listen(port, "0.0.0.0", () => {
//   console.log(`server started in port : ${port}`);
// });

//استدعائات
import multer from "@fastify/multipart";
import path from 'path'
import fastify from "fastify";
import { fileURLToPath } from "url";
//تعريفات
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const UP =fastify({logger:true})
console.log('multer')
//تعريفات لنقل الملف
const storage=multer.diskStorage({
   destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../img"))
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    } 
})
UP.get('/up',async(req,replay)=>{
    return{message:"connected to multer"}
})
UP.post('/upload',async(req,replay)=>{
const upload=multer({storage})
 res.json({ message: "successful send image", file: req.file })
    if (!upload) {
        return res.status(400).json({ error: "No file uploaded" })}
})
UP.register(userRoutes,{prefix:""})
export default UP
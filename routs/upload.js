import express from "express"
import multer from "multer"
import path from "path";
//جديد
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const up = express.Router()
console.log("multer")

//جديد
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../img"))
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
//
up.get("/up", async (req, res) => {
    res.json({ message: "connect multer" })
})
const upload = multer({ storage })
up.use(express.Router())
up.post('/upload', upload.single("up"), async (req, res) => {
    res.json({ message: "successful send image", file: req.file })
if (!upload) {
    return res.status(400).json({ error: "No file uploaded" })
}
})
export default up;

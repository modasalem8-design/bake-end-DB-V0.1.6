//تعريفات
import mysql2, { createConnection } from 'mysql2/promise'
//اتصال بي القاعدة
const db = await createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "ins"
})
console.log("connect in db")
export default db 
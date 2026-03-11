import db from "../sql&user/sql.js";
import express from 'express'

import bcrypt from "bcrypt"
const creat = (express())
creat.use(express.json())
creat.post('/create', async (req, res) => {
    try {
        const { name, pass } = req.body;
        const query = ("INSERT INTO `log`( `name`, `pass`) VALUES ('?','?')")
        const bcryptpass = bcrypt.hashSync(pass, 10);
        const [result] = await db.query(name, bcryptpass)
        res.status(202).json()

    } catch { }
})
export default creat;
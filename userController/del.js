import db from "../sql&user/sql.js";
import express from "express";
const del = (express());
del.use(express.json());
//تجربة
del.get("/del", async (req, res) => {
    res.json("connect to del")
})
del.delete("/del", async (req, res) => {
    try {
        const { name, pass } = req.body
        if (!name || !pass) {
            res.status(504).json({ mesage: "error name or pass undfind" })
        }
        const [rows] = ("SELECT * FROM `log` WHERE `name`=? ")
        if (rows.length === 0) {
            return res.json("error user undfind")
        }

        const [dele] = await db.query("DELETE FROM `log` WHERE `name`=? ", [name])
        if (dele.affectedRows === 0) {
            return res.json("error in delete")
        }
        res.json({
            mesage:"good",
            user: rows[0]
        })

    } catch (error) {
        console.error(error)
        return res.json({ message: "error in del" })
    }

})
export default del
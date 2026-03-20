import fastify from "fastify";
import dotenv from "dotenv"
import connect from "./sql&user/connect.js";
import middie from"@fastify/middie"
import UP from "./routs/upload.js";
dotenv.config()
console.log("connect in server")
const app = fastify({ looger: true })
 await app.register(middie)
const PORT = process.env.PORT 
app.get('/', async (req, reply) => {
    return { message: "hello" }
})
app.use(connect)
app.use(UP)
app.listen({ port:PORT }, (err, adress) => {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
    console.log(`server port in ${PORT}`)
})
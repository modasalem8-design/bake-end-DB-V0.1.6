import fastify from "fastify";
import db from "./sql.js";
import cors from "@fastify/cors"
import middie from "@fastify/middie"
const connect = fastify({ logger: true })
await connect.register(middie)
connect.use(db)
export default connect
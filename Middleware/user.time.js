import timer from "express-rate-limit"
const time =timer({
    windowMs:20*60*1000,
    limit:100,
})
console.log("connect to express")
export default time
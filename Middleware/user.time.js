import timer from "express-rate-limit"
const time =timer({
    windowMs:20*60*1000,
    limit:2,
    message:{
        status:435,
        message:"please try again after 20 minute"
    }
})
console.log("connect to express")
export default time
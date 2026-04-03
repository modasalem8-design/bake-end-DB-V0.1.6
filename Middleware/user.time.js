import timer from "express-rate-limit"
const time =timer({
    windowMs:1*60*1000,
    limit:100,
    message:{
        status:435,
        message:"please try again after 1 minute"
    }
})
console.log("connect to express")
export default time
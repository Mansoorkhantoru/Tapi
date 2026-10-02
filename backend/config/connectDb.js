const mongoose = require("mongoose")

const con = async ()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("Connect")
    }catch(error){
        console.error(error.message);
    }
}

module.exports = con;
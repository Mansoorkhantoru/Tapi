const mongoose = require("mongoose")

const wallSchema = new mongoose.Schema({
    image:{
        type:String 
    }
})

module.exports = mongoose.model("wall",wallSchema)
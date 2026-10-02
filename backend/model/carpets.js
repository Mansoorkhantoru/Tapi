const mongoose = require("mongoose")

const carpetSchema = new mongoose.Schema({
    image:{
        type:String,

    },
    color:[{
        type:String,
        
    }],
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    slug:{
        type:String,
       unique:true
    }

})
carpetSchema.pre("save", function () {
    this.slug = this.name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

});
module.exports = mongoose.model("Carpet" , carpetSchema)
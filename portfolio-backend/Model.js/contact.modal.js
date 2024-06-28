const mongoose = require("mongoose");
const contactSchema =mongoose.Schema(
    {
        name:{type:String , require:[true]},
        email:{type:String},
        message:{type:String}
       
    }
);
const Contact= mongoose.model ("Contact", contactSchema);
module.exports= Contact;
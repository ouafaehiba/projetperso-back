const mongoose=require("mongoose");
const UserScheme=mongoose.Schema({
    username:{type:String,required:true},
    Email:{type:String,required:true},
    password:{type:String,required:true},
    age:{type:String},
    tel:{type:String},
    admin:{type:Boolean},

})
   
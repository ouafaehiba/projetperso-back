const express = require('express');
const ap = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

const cors = require('cors');
app.use(cors());
require('dotenv').config();
var dbUrl= process.env.DATABASE_URL
console.log(dbUrl);
const mongoose = require('mongoose');
mongoose.set("strictQuery",false);
mongoose.connect(dbUrl,{useUrlParser:true,useUnifiedTopology:true})
.then(
    console.log("MongoDB connected !")
)
.catch(err=>console.log(err))
const port=process.env.port
const methodOverride=require('method-override');
app.use(methodOverride('_method'))
const server=app.listen(5000,function(){
    console.log("server listening on port"+port)

})

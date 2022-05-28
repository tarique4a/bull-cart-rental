require('dotenv').config();
const mongoose = require("mongoose");
const mongodb = process.env.mongodb;

function db() {
   mongoose.connect(mongodb, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  const connection=mongoose.connection;
  connection.on("connected",()=>{
      console.log("mongodb connected");
  })
  connection.on("error",()=>{
      console.log("error not connected");
  })

}
db();

module.exports = mongoose;
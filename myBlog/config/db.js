const mongoose = require("mongoose");
const asynchandler = require("express-async-handler");
require("dotenv").config();

const connectDb = asynchandler(async ()=>{
    // .env 파일의 MONGODB_URI 값을 사용해 접속
    const connect =await mongoose.connect(process.env.MONGODB_URI);
    console.log(`DB connected: ${connect.connection.host}`);
});

module.exports = connectDb;
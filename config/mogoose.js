// importing required pacakges
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //connecting to db 
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      `Database Connected ${connect.connection.host} Database Name ${connect.connection.name}`
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;

require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = () => {
  const URL = process.env.MONGODB_URL;
  mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("database connected");
    })
    .catch(() => {
      console.log("somthing went wrong in database");
    });
};

module.exports = connectDB;

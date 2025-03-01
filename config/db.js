const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to Db");
  } catch (err) {
    console.log("Error in connected to db");
  }
};

module.exports = connectdb;

const mongoose = require("mongoose");
const { mongoDB_atlas_url } = require("../variables");

const connectDatabase = async (options = {}) => {
  try {
    await mongoose.connect(mongoDB_atlas_url, options);
    console.log("Database Connected");
    mongoose.connection.on("error", () => {
      console.error("db connection error : ", error);
    });
  } catch (error) {
    console.error("db connection failed : ", error.toString());
  }
};
module.exports = connectDatabase;

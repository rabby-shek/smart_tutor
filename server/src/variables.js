require("dotenv").config();
const port = process.env.SERVER_PORT || 8000;
const mongoDB_atlas_url = process.env.MONGODB_ATLAS_URL || "mongodb://localhost:27017/smart_tutor";
module.exports = { port, mongoDB_atlas_url };

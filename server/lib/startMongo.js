const mongoose = require("mongoose");

const Models = require("../schema/models");

const connectionString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_URL}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

const start = async () => {
  try {
    console.log("Attempting to connect to mongo...");
    await mongoose.connect(connectionString);
    console.log("Connected to mongo");
  } catch (err) {
    console.log("error", err);
  }
};

module.exports = start;

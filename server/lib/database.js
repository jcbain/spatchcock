const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongod = null;

const Models = require("../schema/models");

let connectionString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_URL}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

const start = async () => {
  try {
    console.log("Attempting to connect to mongo...");
    if (process.env.NODE_ENV === "test") {
      mongod = await MongoMemoryServer.create();
      connectionString = mongod.getUri();
    }
    await mongoose.connect(connectionString);
    console.log("Connected to mongo");
  } catch (err) {
    console.log("error", err);
  }
};

const stop = async () => {
  try {
    await mongoose.connection.close();
    if (mongod) {
      await mongod.stop();
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = { start, stop };

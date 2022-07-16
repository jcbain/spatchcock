const express = require("express");

const startMongo = require("./lib/startMongo");
const recipeRouter = require("./lib/routes/recipes");

const PORT = 3000;
const app = express();

const start = async () => {
  await startMongo();
  app.use(express.json());

  app.use("/recipes", recipeRouter);

  app.listen(PORT, () => console.log(`server listening on post ${PORT}`));
};

start().catch((err) => console.log(err));

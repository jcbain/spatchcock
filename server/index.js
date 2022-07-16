const express = require("express");
const morgan = require("morgan");

const startMongo = require("./lib/startMongo");
const recipeRouter = require("./lib/routes/recipes");

const PORT = 3000;
const app = express();
const isDev = process.env.NODE_ENV === "development" || false;

const start = async () => {
  await startMongo();
  app.use(express.json());
  if (isDev) {
    app.use(morgan("dev"));
  }

  app.use("/recipes", recipeRouter);

  app.listen(PORT, () => console.log(`server listening on post ${PORT}`));
};

start().catch((err) => console.log(err));

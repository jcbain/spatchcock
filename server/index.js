// const express = require("express");
const morgan = require("morgan");

const startMongo = require("./lib/startMongo");
const app = require("./lib/server");
// const recipeRouter = require("./lib/routes/recipes");
// const ingredientRouter = require("./lib/routes/ingredients");
// const errors = require("./lib/middlewares/errors");

const PORT = 3000;
// const app = express();
const isDev = process.env.NODE_ENV === "development" || false;

const start = async () => {
  await startMongo();
  // app.use(express.json());
  if (isDev) {
    app.use(morgan("dev"));
  }

  // app.use("/recipes", recipeRouter);
  // app.use("/ingredients", ingredientRouter);

  // app.use(errors);

  app.listen(PORT, () => console.log(`server listening on post ${PORT}`));
};

start().catch((err) => console.log(err));

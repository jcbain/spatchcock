const express = require("express");
const morgan = require("morgan");

const isDev = process.env.NODE_ENV === "development" || false;

// ROUTES
const recipeRouter = require("./routes/recipes");
const ingredientRouter = require("./routes/ingredients");
const errors = require("./middlewares/errors");

const app = express();

app.use(express.json());

if (isDev) {
  app.use(morgan("dev"));
}

// ENDPOINTS
app.use("/recipes", recipeRouter);
app.use("/ingredients", ingredientRouter);

// ERRORS
app.use(errors);

module.exports = app;

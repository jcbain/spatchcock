const express = require("express");

// ROUTES
const recipeRouter = require("./routes/recipes");
const ingredientRouter = require("./routes/ingredients");
const errors = require("./middlewares/errors");

const app = express();

app.use(express.json());

// ENDPOINTS
app.use("/recipes", recipeRouter);
app.use("/ingredients", ingredientRouter);

// ERRORS
app.use(errors);

module.exports = app;

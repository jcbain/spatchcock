const { Schema, model } = require("mongoose");

const ingredientSchema = new Schema({
  name: String,
});

module.exports = model("Ingredient", ingredientSchema);

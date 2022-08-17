const { Schema, model } = require("mongoose");

const ingredientSchema = new Schema({
  name: String,
  defaultUnit: { type: Schema.Types.ObjectId, ref: "Unit" },
});

module.exports = model("Ingredient", ingredientSchema);

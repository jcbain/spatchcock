const { Schema, model } = require("mongoose");

const unitSchema = new Schema({
  name: { type: String, required: true },
  abbreviation: String,
  metric: Boolean,

  // type of unit of measurement ie. volume, weight...
  type: String,
});

module.exports = model("Unit", unitSchema);

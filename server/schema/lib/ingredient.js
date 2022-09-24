const { Schema, model } = require("mongoose");
const pluralize = require("pluralize");

const ingredientSchema = new Schema({
  name: String,
});

ingredientSchema.statics.checkAndCreate = async function (name) {
  let searchName = name.toLowerCase();
  if (pluralize.isPlural(searchName)) {
    searchName = pluralize.singular(searchName);
  }

  console.log(searchName);

  // const newCopy = await this.findById(recipeId).exec();
  // const parentId = newCopy._id;
  // newCopy.parent = Types.ObjectId(parentId);
  // newCopy._id = Types.ObjectId();
  // newCopy.isNew = true;
  // return newCopy;
};

module.exports = model("Ingredient", ingredientSchema);

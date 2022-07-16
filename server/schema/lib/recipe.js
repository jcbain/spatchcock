const { Schema, model, Types } = require("mongoose");

const recipeSchema = new Schema(
  {
    title: String,
    parent: { type: Schema.Types.ObjectId, ref: "Recipe" },
    ingredients: [
      {
        ingredient: { type: Schema.Types.ObjectId, ref: "Ingredient" },
        quantity: Number,
        unit: String,
      },
    ],
    instruction: String,
  },
  {
    statics: {
      async copy(recipeId) {
        const newCopy = await this.findById(recipeId).exec();
        const parentId = newCopy._id;
        newCopy.parent = Types.ObjectId(parentId);
        newCopy._id = Types.ObjectId();
        newCopy.isNew = true;
        return newCopy;
      },
    },
  }
);

module.exports = model("Recipe", recipeSchema);

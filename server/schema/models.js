const Ingredient = require("./lib/ingredient");
const Recipe = require("./lib/recipe");
const Unit = require("./lib/unit");

class Models {
  constructor() {
    this.Ingredient = Ingredient;
    this.Recipe = Recipe;
    this.Unit = Unit;
  }
}

module.exports = Models;

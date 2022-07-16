const Ingredient = require("./lib/ingredient");
const Recipe = require("./lib/recipe");

class Models {
  constructor() {
    this.ingredient = new Ingredient();
    this.recipe = new Recipe();
  }
}

module.exports = Models;

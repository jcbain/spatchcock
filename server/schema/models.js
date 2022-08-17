const Ingredient = require("./lib/ingredient");
const Recipe = require("./lib/recipe");
const Unit = require("./lib/unit");

class Models {
  constructor() {
    this.ingredient = new Ingredient();
    this.recipe = new Recipe();
    this.unit = new Unit();
  }
}

module.exports = Models;

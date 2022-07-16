const { Router } = require("express");

const Recipe = require("../../schema/lib/recipe");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res
      .status(400)
      .send({ status: 6900, message: "spatchcock error: not allowed" });
  }
});

router.post("/", async (req, res) => {
  const { title, ingredients, instruction } = req.body;
  if (!title) {
    return res.send({
      status: 6900,
      message: "spatchcock error: title is missing",
    });
  }

  try {
    await Recipe.create({ title, ingredients: ingredients, instruction });
    res.status(200).send({ status: 4200, message: "success" });
  } catch (err) {
    res
      .status(400)
      .send({ status: 6900, message: "spatchcock error: not allowed" });
  }
});

router.put("/:recipe_id", async (req, res) => {
  const recipeId = req.params.recipe_id;

  try {
    const copy = await Recipe.copy(recipeId);
    await Recipe.create(copy);
    res.json(copy);
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .send({ status: 6900, message: "spatchcock error: not allowed" });
  }
});

module.exports = router;

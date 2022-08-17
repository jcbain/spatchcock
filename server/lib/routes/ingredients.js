const { Router } = require("express");

const Ingredient = require("../../schema/lib/ingredient");

const router = Router();

router.post("/", async (req, res) => {
  Ingredient.create({ name: "mushroom" });
  res.status(200).send({ status: 4200, message: "success" });
});

module.exports = router;

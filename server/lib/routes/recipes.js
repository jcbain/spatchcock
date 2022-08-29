const { Router } = require("express");

const Recipe = require("../../schema/lib/recipe");
const SpatchcockError = require("../../SpatchcockError");

const router = Router();
const allowList = {
  "/": { methods: ["GET"] },
};

router.use((req, res, next) => {
  const { method, path } = req;

  if (allowList[path]?.methods?.includes(method)) {
    return next();
  }

  const authorization = req.get("authorization");
  if (!authorization) {
    return next(new SpatchcockError(6969));
  }

  const splitAuth = authorization.split(" ");
  if (splitAuth.length !== 2 && splitAuth[0].toLowerCase() !== "bearer") {
    return next(new SpatchcockError(6900));
  }

  return next();
});

router.get("/", async (req, res, next) => {
  try {
    const recipes = await Recipe.find({ public: true })
      .limit(20)
      .sort("-createdAt");
    res.json(recipes);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  const { title, instruction, token } = req.body;

  if (!title || !token) {
    return next(new SpatchcockError(6800));
  }

  try {
    await Recipe.create({ title, token });
    res.status(200).send({ status: 4200, message: "success" });
  } catch (err) {
    return next(new SpatchcockError(err));
  }
});

router.put("/:recipe_id", async (req, res) => {
  const recipeId = req.params.recipe_id;

  try {
    const copy = await Recipe.copy(recipeId);
    await Recipe.create(copy);
    res.json(copy);
  } catch (err) {
    return next(err);
  }
});

router.delete("/:recipe_id", async (req, res) => {
  const recipeId = req.params.recipe_id;
  await Recipe.deleteOne({ _id: recipeId });
  res.status(200).send({ status: 4200, message: "good job" });
});

module.exports = router;

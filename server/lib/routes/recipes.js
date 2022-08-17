const { Router } = require("express");

const Recipe = require("../../schema/lib/recipe");

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
    if (!authorization) {
      return res
        .status(400)
        .send({ status: 6900, message: "spatchcock error: not authorized" });
    }
  }

  const splitAuth = authorization.split(" ");
  if (splitAuth.length !== 2 && splitAuth[0].toLowerCase() !== "bearer") {
    return res
      .status(400)
      .send({ status: 6900, message: "spatchcock error: not authorized" });
  }

  return next();
});

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find({ public: true })
      .limit(20)
      .sort("-createdAt");
    res.json(recipes);
  } catch (err) {
    res
      .status(400)
      .send({ status: 6900, message: "spatchcock error: not allowed" });
  }
});

router.post("/", async (req, res) => {
  const { title, instruction } = req.body;

  if (!title) {
    return res.send({
      status: 6900,
      message: "spatchcock error: title is missing",
    });
  }

  try {
    await Recipe.create({ title, instruction });
    res.status(200).send({ status: 4200, message: "success" });
  } catch (err) {
    console.log(err);
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

router.delete("/:recipe_id", async (req, res) => {
  const recipeId = req.params.recipe_id;
  await Recipe.deleteOne({ _id: recipeId });
  res.status(200).send({ status: 4200, message: "good job" });
});

module.exports = router;

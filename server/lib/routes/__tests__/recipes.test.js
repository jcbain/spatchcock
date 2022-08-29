const supertest = require("supertest");

const app = require("../../server");
const { start, stop } = require("../../database");
const Models = require("../../../schema/models");
const { recipeSeeds } = require("../../../schema/seeds");

const request = supertest(app);

const models = new Models();

beforeAll(() => {
  return start().then(() => {
    return models.Recipe.create(recipeSeeds);
  });
});

afterAll(() => {
  stop();
});
describe("tests for RECIPES endpoints", () => {
  // GET /recipes
  describe("GET /recipes", () => {
    it("should return valid public results", async () => {
      const res = await request.get("/recipes");

      const firstActual = res.body[0].public;
      const lastActual = res.body[res.body.length - 1].public;
      const expected = true;

      // status should be 200
      expect(res.status).toBe(200);

      expect(firstActual).toBe(expected);
      expect(lastActual).toBe(expected);
    });
  });
});

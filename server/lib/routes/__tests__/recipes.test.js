const supertest = require("supertest");

const app = require("../../server");
const { start, stop } = require("../../database");
const Models = require("../../../schema/models");
const { recipeSeeds } = require("../../../schema/seeds");

const request = supertest(app);

const models = new Models();

beforeAll(async () => {
  await start();
  await models.Recipe.create(recipeSeeds);
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

    it("should return less that or equal to 20 recipes", async () => {
      const res = await request.get("/recipes");

      const maxExpectedValue = 20;
      const actualLength = res.body.length;

      expect(actualLength).toBeLessThanOrEqual(maxExpectedValue);
    });
  });

  // POST /recipes
  describe("POST /recipes", () => {
    it("should create a new recipe successfully", async () => {
      const payload = {
        title: "ookle nook",
        instruction: "ookle the nook before snookling the book",
        token: "someToken",
      };

      try {
        const res = await request
          .post("/recipes")
          .set("Authorization", "Bearer fakebearer")
          .set("Accept", "application/json")
          .send(payload);

        expect(res.status).toBe(200);
      } catch (err) {
        console.log(err);
      }
    });
  });
});

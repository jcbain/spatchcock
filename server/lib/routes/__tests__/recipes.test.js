const supertest = require("supertest");

const app = require("../../server");
const { start, stop } = require("../../database");

const request = supertest(app);

beforeAll(() => {
  start();
});

afterAll(() => {
  stop();
});
describe("tests for RECIPES endpoints", () => {
  // GET /recipes
  describe("GET /recipes", () => {
    it("should return a status of 200", async () => {
      try {
        const res = await request.get("/recipes");
        expect(res.status).toBe(200);
      } catch (err) {
        throw err;
      }
    });
  });
});

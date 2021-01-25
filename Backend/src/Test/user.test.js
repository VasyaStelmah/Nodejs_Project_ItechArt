const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
  test("Should response Unauthorized", async (done) => {
    try {
      await request(app)
        .get("/user/getAll")
        .send()
        .then((response) => {
          expect(response.statusCode).toBe(401);
          done();
        });
    } catch (e) {
      console.log(`Error ${e}`);
    }
  }, 30000);
});

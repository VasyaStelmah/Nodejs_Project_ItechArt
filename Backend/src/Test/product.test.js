const request = require("supertest");
const app = require("../app");
const productService = require("../services/product");

describe("Test the product api", () => {
  let object = 0;
  beforeEach(async () => {
    object = await productService.getById(7);
  });
  test("Should response Unauthorized", async (done) => {
    try {
      await request(app)
        .get("/product")
        .send()
        .then((response) => {
          expect(response.statusCode).toBe(401);
          done();
        });
    } catch (e) {
      console.log(`Error ${e}`);
    }
  }, 10000);
  test("Should get product by id=7", () => {
    expect(object.id).toBe(7);
  }, 10000);
});

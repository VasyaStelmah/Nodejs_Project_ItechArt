const request = require("supertest");
const app = require("../app");

describe("Test the auth path", () => {
  test("It should response the POST method", async (done) => {
    const login = {
      email: "pimenov@mail.ru",
      password: "pass",
    };
    try {
      await request(app)
        .post("/auth/login")
        .send(login)
        .then((response) => {
          expect(response.charset).toEqual("utf-8");
          expect(response.statusCode).toBe(200);

          done();
        });
    } catch (e) {
      console.log(`Error ${e}`);
    }
  });
});

const request = require("supertest");
const app = require("../app");

describe("Test the auth and register path", () => {
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
  }, 30000);
  test("Should response This email already exists", async (done) => {
    const user = {
      last_name: "Pikaev",
      name: "Valery",
      email: "pikaev@mail.ru",
      login: "pim",
      password: "pass",
    };
    try {
      await request(app)
        .post("/auth/register")
        .send(user)
        .then((response) => {
          expect(response.statusCode).toBe(409);
          done();
        });
    } catch (e) {
      console.log(e);
    }
  }, 300000);
});

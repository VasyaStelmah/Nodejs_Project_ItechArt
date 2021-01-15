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
          console.log(response.body.token);
          console.log(response.headers);
          const token = response.body.token;
          const cookies = response.headers;
          done();
        });
      console.log(response.headers);
      await request(app)
        .get("/product")
        .send(cookies, token)
        .then((response) => {
          expect(response.charset).toEqual("utf-8");
          expect(response.statusCode).toBe(200);
          // console.log(response);
          done();
        });
    } catch (e) {
      console.log(`Error ${e}`);
    }
  });
  test("It should response the GET method", async (done) => {
    try {
      await request(app)
        .post("/product")
        .send()
        .then((response) => {
          expect(response.charset).toEqual("utf-8");
          expect(response.statusCode).toBe(200);
          // console.log(response);
          done();
        });
    } catch (e) {
      console.log(`Error ${e}`);
    }
  });
});
// body: {
//   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjEwNzExNjE5LCJleHAiOjE2MTA3MTUyMTl9.jc9_Pookof9wPLNUCC7agh66qFVA2yeIgmuohbsyoHQ'
// }
// headers: {
//   'x-powered-by': 'Express',
//   'set-cookie': [
//     'id_user=7; Max-Age=86; Path=/; Expires=Fri, 15 Jan 2021 11:55:06 GMT'
//   ],

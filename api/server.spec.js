const request = require("supertest");
const server = require("./server.js");

describe("server.js", () => {
  describe("These should pass:", () => {
    test("that the testing environment is set up", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });

    describe("GET / ", () => {
        let res = {};
        beforeAll(async () => {
            res = await request(server).get("/");
        })
      it("Should return 200 ok", async () => {
        // const res = await request(server).get("/");
        expect(res.status).toBe(200);
      });

      it("should return a JSON object", async () => {
        //   const res = await request(server).get("/");
          expect(res.type).toBe('application/json');
      })

      it("should return a {api: 'up'}", async () => {
          expect(res.body).toEqual({api: 'up'})
      })
    });
  });
});

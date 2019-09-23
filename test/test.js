const expect = require("chai").expect;
const request = require("request");

describe("Server API routes", () => {
  it("Get request Products", done => {
    request("http://localhost:4000/api/products", (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("GET request Products Query Name", done => {
    request(
      "http://localhost:4000/api/products?name=zeus",
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body), "Body should return an array").to.be.a('array')
        expect(JSON.parse(body)).to.eql([
          {
              "productID": 1,
              "name": "Zeus Board",
              "tags": "surfboards",
              "image": "/productOne.webp",
              "description": "The CI team calls the Zeus “A quick and loose all-around performance shortboard. It is a great board at its current price point.",
              "ID": 1,
              "price": 530
          }
      ])
        done();
      }
    );
  });

  it("GET request Products Query Tags", done => {
    request(
      "http://localhost:4000/api/products?tags=surf",
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body), "Body should return an array").to.be.a('array')
        expect(JSON.parse(body)).to.have.lengthOf(6)
        done();
      }
    );
  });

  it("Get request Contacts", done => {
    request("http://localhost:4000/api/contacts", (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("Endpoints that haven't been created", done => {
    request("http://localhost:4000/adfsdf", (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  })
});

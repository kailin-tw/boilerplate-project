import { Person } from "../src/person";

describe("Person test", () => {
  it("should return greet", () => {
    const person = new Person();
    expect({ a: 1, b: 2}).toEqual({ b: 2, a: 1});
  });
});

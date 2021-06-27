import { add, sub, getFood } from "./helper";

// unit-testing ==> AAA , A=Arrange,Act,Assert

it("1+2=3", () => {
  const actual = add(1, 2);
  expect(actual).toBe(3);
});

it("1-2=3", () => {
  const actual = sub(1, 2);
  expect(actual).toBe(-1);
});

it("shoud get biryani", (done) => {
  let promise = getFood();
  promise.then((food) => {
    expect(food).toBe("biryani");
    done()
  });
});

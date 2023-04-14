const { add, subtract } = require("../sum");

test("Check Sum Fuction", () => {
  const result = add(10, 20);
  expect(result).toBe(30);
});

test("Check Subtract Fuction", () => {
  const result = subtract(20, 10);
  expect(result).toBe(10);
});

const { helper, execute } = require("../demo");

test("Check Execute Function for EVEN", () => {
  const result = execute();
  expect(result).toBe("EVEN");
});


// test("Check Execute Function for ODD", () => {
//   const result = execute();
//   expect(result).toBe("ODD");
// });

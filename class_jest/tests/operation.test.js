const OperationController = require("../controller/operation.controller");
const OperationService = require("../service/operation.service");

jest.mock("../service/operation.service.js");

test("Should return name", () => {
  const data = { name: "Mouneeswar" };

  const spy = jest.spyOn(OperationService, "getName").mockImplementation(() => {
    return { name: "Mouneeswar" };
  });

  const result = OperationController.getName();
  expect(result).toStrictEqual(data);
});

test("Should return age", () => {
  const data = { age: 22 };

  const spy = jest.spyOn(OperationService, "getAge").mockImplementation(() => {
    return { age: 22 };
  });

  const result = OperationController.getAge();
  expect(result).toStrictEqual(data);
});

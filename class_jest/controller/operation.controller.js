const OperationService = require("../service/operation.service");

class OperationController {
  getName() {
    const response = OperationService.getName(); // helper function
    return {
      name: response.name,
    }; // {name : "Mouneeswar"}
  }

  getAge() {
    const response = OperationService.getAge();
    return {
      age: response.age,
    }; // {age : 22}
  }
}

module.exports = new OperationController();

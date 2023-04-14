class OperationService {
  getName() {
    return {
      name: "Mouneeswar",
    };
  }

  getAge() {
    return {
      age: 22,
    };
  }
}

module.exports = new OperationService();

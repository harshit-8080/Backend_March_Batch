function helper() {
  const number = Math.floor(Math.random() * 10);
  console.log(number);
  if (number % 2 == 0) {
    return "EVEN";
  } else {
    return "ODD";
  }
}

function execute() {
  const result = helper();
  return result;
}

module.exports = {
  helper,
  execute,
};

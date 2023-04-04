const teamTest = async (req, res) => {
  res.json({ Message: "This is a test message from team" });
};

module.exports = {
  teamTest,
};

const playerTest = async (req, res) => {
  res.json({ Message: "This is a test message from player" });
};

module.exports = {
  playerTest,
};

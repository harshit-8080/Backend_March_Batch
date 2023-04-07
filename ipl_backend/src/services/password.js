const bcrypt = require("bcrypt");

const generateSalt = () => {
  const salt = bcrypt.genSaltSync(8);
  return salt;
};

const hashPassword = (password, salt) => {
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};

module.exports = {
  hashPassword,
  generateSalt,
};

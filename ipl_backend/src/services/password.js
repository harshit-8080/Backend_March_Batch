const bcrypt = require("bcrypt");

const generateSalt = () => {
  const salt = bcrypt.genSaltSync(8);
  return salt;
};

const hashPassword = (password, salt) => {
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};

const decodePassword = (plainPassword, hashPassword) => {
  const result = bcrypt.compareSync(plainPassword, hashPassword);
  return result;
};

module.exports = {
  hashPassword,
  generateSalt,
  decodePassword,
};

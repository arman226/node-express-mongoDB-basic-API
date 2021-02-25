const Users = require("../data/schemas/users");

module.exports.retrieveAllUsers = async () => {
  return await Users.find();
};

module.exports.addUser = async (user) => {
  const { name, nickName } = user;
  const subscriber = new Users({ name, nickName });
  const newUser = await subscriber.save();
  return newUser;
};

module.exports.retrieveUserById = async (id) => {
  return await Users.findById(id);
};
